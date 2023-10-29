const fs = require("fs");
const { CLIEngine } = require("eslint");
const path = require("path");
const { parse } = require("babylon");

try {
  const getAst = (source = "", filename) => {
    return parse(source, {
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      allowSuperOutsideMethod: true,
      sourceType: "module",
      sourceFilename: filename,
      plugins: [
        "jsx",
        "flow",
        "doExpressions",
        "objectRestSpread",
        "decorators2",
        "classProperties",
        "classPrivateProperties",
        "classPrivateMethods",
        "exportExtensions",
        "asyncGenerators",
        "functionBind",
        "functionSent",
        "dynamicImport",
        "numericSeparator",
        "optionalChaining",
        "importMeta",
        "bigInt",
        "optionalCatchBinding",
        "throwExpressions",
        "pipelineOperator",
        "nullishCoalescingOperator",
      ],
    });
  };

  /* Parses comments like:

  // Expect error:no-undef
  something();

  // Expect warn:no-unused-expressions, error:no-undef
  somethingElse;
  */
  const parseComment = (value) => {
    const matches = value.match(/^ Expect ([:\w-/, ]+)/i);
    if (matches) {
      return matches[1].split(",").map((str) => {
        const [severity, ruleId] = str.trim().split(":");
        return { severity, ruleId };
      });
    } else {
      return [];
    }
  };

  const severities = {
    warn: 1,
    error: 2,
    1: "warn",
    2: "error",
  };

  const files = fs.readdirSync(path.resolve(__dirname, "tests"));
  files.forEach((filename) => {
    if (filename === ".eslintrc.json") {
      return;
    }
    const content = fs.readFileSync(
      path.resolve(__dirname, "tests", filename),
      "utf-8",
    );
    const ast = getAst(content);
    const firstComment = ast.comments[0];
    const lines = firstComment.value.trim().split("\n");
    if (lines[0].trim() !== "eslint-config") {
      throw new Error(filename + " did not specify its eslint config");
    }
    const configJSON = lines.slice(1).join("\n");
    fs.writeFileSync(
      path.resolve(__dirname, "tests", ".eslintrc.json"),
      configJSON,
    );

    const cli = new CLIEngine({
      configFile: path.resolve(__dirname, "tests", ".eslintrc.json"),
      useEslintrc: false,
    });
    const report = cli.executeOnFiles([path.join("tests", filename)]);
    const file = report.results[0];

    describe(path.basename(file.filePath), () => {
      const ast = getAst(file.source, file.filePath);

      it("contains all expected messages", () => {
        ast.comments.forEach((comment) => {
          const expectedRules = parseComment(comment.value);

          if (expectedRules.length > 0) {
            expectedRules.forEach(({ severity, ruleId }) => {
              const messagesOnLine = file.messages.filter(
                (message) => message.line === comment.loc.start.line + 1,
              );
              const expectedMessage = messagesOnLine.find(
                (message) => message.ruleId === ruleId,
              );

              if (expectedMessage == null) {
                let errorMessage = `Expected one or more ${ruleId} on line ${
                  comment.loc.start.line + 1
                }, but none were present.`;

                if (messagesOnLine.length > 0) {
                  errorMessage += ` Instead, the following messages were present: ${messagesOnLine
                    .map((m) => m.ruleId)
                    .join(", ")}.`;
                } else {
                  errorMessage += " Instead, there were no messages present.";
                }

                throw new Error(errorMessage);
              } else {
                if (expectedMessage.severity !== severities[severity]) {
                  throw new Error(
                    `Expected the ${ruleId} on line ` +
                      `${comment.loc.start.line + 1} to be of severity ` +
                      `${severity}, but it was of severity ` +
                      `${severities[expectedMessage.severity]}.`,
                  );
                } else {
                  // All good
                }
              }
            });
          }
        });
      });

      it("contains no unexpected messages", () => {
        file.messages.forEach((message) => {
          const comment = ast.comments.find(
            (comment) => comment.loc.start.line === message.line - 1,
          );

          const failMessage = (message) => {
            throw new Error(
              `Unexpected ${message.ruleId} (${
                severities[message.severity]
              }) ` + `at line ${message.line}, column ${message.column}.`,
            );
          };

          if (comment) {
            const expectedRules = parseComment(comment.value);
            if (expectedRules.some(({ ruleId }) => ruleId === message.ruleId)) {
              // This rule was expected, so we're good
            } else {
              failMessage(message);
            }
          } else {
            failMessage(message);
          }
        });
      });
    });
  });
} finally {
  if (fs.existsSync(path.resolve(__dirname, "tests", ".eslintrc.json"))) {
    fs.unlinkSync(path.resolve(__dirname, "tests", ".eslintrc.json"));
  }
}
