module.exports = {
  plugins: ["import"],
  rules: {
    // It is an error to import a module that cannot be resolved.
    "import/no-unresolved": ["error", { commonjs: true }],

    // It is an error to import a named export from a module that does not have
    // an export with that name.
    "import/named": "error",

    // It is an error to import a default export from a module that does not
    // have a default export.
    "import/default": "error",

    // It is an error to dereference an export from a namespace when the module
    // that we got the namespace from doesn't have an export with that name in
    // it.
    "import/namespace": "error",

    // It is an error to have more than one default export or more than one
    // export with the same name.
    "import/export": "error",

    // If the user accidentally forgets the braces around a named import, and
    // instead tries to use that name as the name of the default import, they
    // probably made a mistake and intended to put braces around the name, since
    // they probably would have used a different name when fetching the default
    // export.
    "import/no-named-as-default": "warn",

    // Since users who use import statements almost always use a package.json,
    // warn if they import a package that isn't listed in their package.json.
    // Note that if there's no package.json in the project, this rule won't flag
    // anything.
    "import/no-extraneous-dependencies": "warn"
  }
};
