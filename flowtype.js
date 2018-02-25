module.exports = {
  // We need to use babel-eslint, because eslint's built-in parser can't parse
  // flow types.
  parser: "babel-eslint",
  plugins: ["flowtype"],
  rules: {
    // The rules in this file are listed in the same order as on
    // https://www.npmjs.com/package/eslint-plugin-flowtype#eslint-plugin-flowtype-rules
    // (at time of writing).

    // Rules that are turned off are commented out because every rule is off by
    // default in eslint, and we don't want to clobber other configs if you're
    // extending multiple things.

    // Stylistic preference
    // "flowtype/boolean-style": "off",

    // Marks types as defined so that no-undef doesn't flag them. As far as I
    // can tell, it doesn't matter if you use "warn" or "error" for this rule,
    // because it only affects the behavior of no-undef.
    "flowtype/define-flow-type": "warn",

    // Stylistic preference
    // "flowtype/delimiter-dangle": "off",

    // Stylistic preference
    // "flowtype/generic-spacing": "off",

    // This is like no-dupe-keys but for flow types. Just like with
    // no-dupe-keys, it's not invalid to have them, but they're usually the
    // result of unfinished code reorganization, so it's useful for eslint to
    // point them out.
    "flowtype/no-dupe-keys": "warn",

    // Subjective best-practice; some projects will use mutable arrays.
    // "flowtype/no-mutable-array": "off",

    // This rule forbids using Boolean, String and Number (which refer to the
    // wrapper types created by new Boolean(x), new String(x), and
    // new Number(x). Usually, you want boolean, string, and number instead
    // (which refer to the primitive types, eg true, "a", 4.2). This is almost
    // always true, but there can *technically* be times where you want to
    // refer to the wrapper types specifically for some reason. That said, it's
    // so uncommon, that this is probably a typo... so I'm kinda on the fence
    // about this one. I'm going to turn it off in the unobtrusive spirit of
    // staying out of the developer's way.
    // "flowtype/no-primitive-constructor-types": "off",

    // Even though some people could enable flow in every js file in their
    // project (without requiring the at-flow comment), this is pretty uncommon,
    // and it can be frustrating to try to debug why your types aren't flagging
    // incorrect code when you forgot to put an at-flow comment. So I'm going to
    // turn this one on as a warn, since it helps the user.
    "flowtype/no-types-missing-file-annotation": "warn",

    // Same config here as no-unused-expressions; this rule works the same way
    // but does not flag typecast expressions.
    "flowtype/no-unused-expressions": [
      "warn",
      {
        // Allow eg. optionConfigured && doIt();
        allowShortCircuit: true,
        // Allow eg. optionConfigured ? doIt() : null;
        allowTernary: true,
        // Allow eg. taggedTemplateStringFunctionWithSideEffects`yup`;
        allowTaggedTemplates: true
      }
    ],
    // We want to also turn off no-unused-expressions since the flowtype
    // version is the same.
    "no-unused-expressions": "off",

    // This is a nice rule to have in strictly typed codebases, but is too
    // strict to recommend for general use.
    // "flowtype/no-weak-types": "off",

    // Stylistic preference
    // "flowtype/object-type-delimiter": "off",

    // Subjective best practice/too strict. Flow already requires annotations on
    // exported functions/methods, which is good enough for most cases.
    // "flowtype/require-parameter-type": "off",

    // Like above, this is subjective best practice/too strict.
    // "flowtype/require-return-type": "off",

    // This rule can be used to enforce the presence and style of a @flow
    // comment. We don't use it for either of those things because not every
    // project uses flow comments, and enforcing the style (`/* @flow */` vs
    // `// @flow`) is a stylistic preference. However, it can also detect typos
    // like `@floww`. That's useful and in line with the goals of unobtrusive,
    // so warn when that happens.
    "flowtype/require-valid-file-annotation": [
      "warn",
      "never", // Don't report files that are missing a @flow comment
      {
        annotationStyle: "none" // Accept either `/* @flow */` or `// @flow`
      }
    ],

    // Subjective best practice/too strict.
    // "flowtype/require-variable-type": "off",

    // Stylistic preference
    // "flowtype/semi": "off",

    // Stylistic preference
    // "flowtype/sort-keys": "off",

    // Stylistic preference
    // "flowtype/space-after-type-colon": "off",

    // Stylistic preference
    // "flowtype/space-before-generic-bracket": "off",

    // Stylistic preference
    // "flowtype/space-before-type-colon": "off",

    // Too strict/not applicable to a general-purpose ESLint configuration
    // "flowtype/type-id-match": "off",

    // Stylistic preference
    // "flowtype/union-intersection-spacing": "off",

    // Marks type alias declarations as used for no-unused-vars. As far as I
    // can tell, it doesn't matter if you use "warn" or "error" for this rule,
    // because it only affects the behavior of no-unused-vars.
    "flowtype/use-flow-type": "warn"
  }
};
