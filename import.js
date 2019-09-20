module.exports = {
  plugins: ["import"],
  rules: {
    // The rules in this file are laid out in the same categories and in the
    // same order as on http://npm.im/eslint-plugin-import (at time of writing).

    // Rules that are turned off are commented out because every rule is off by
    // default in eslint, and we don't want to clobber other configs if you're
    // extending multiple things.

    // ---------------
    // Static analysis
    // ---------------

    // It is an error to import a module that cannot be resolved.
    // The commonjs: true option informs the rule to also resolve CommonJS
    // require statements. I'm omitting amd here because depending on if you are
    // using require.js or r.js, the semantics for resolving amd module paths
    // are different.
    "import/no-unresolved": [
      "error",
      {
        // Also error for unresolved CommonJS require() calls.
        commonjs: true,

        // Don't attempt to resolve AMD define/require calls, because depending
        // on if the user is using r.js or require.js, the semantics for
        // resolving a path will be different.
        // An AMD user probably wouldn't add unobtrusive/import anyway, but
        // they might be using a codebase using mixed module systems.
        // This is commented out because it is the default value.
        // amd: false,

        // Don't ignore any specifiers; we don't know what kind of things the
        // user might be importing.
        // This is commented out because it is the default value.
        // ignore: [],

        // Even though an application may run fine with a case difference
        // between an import specifier and the filename (depending on the case
        // sensitivity of your filesystem), this is almost always a mistake, so
        // flag it for the user. It's unfortunate that we can't make this
        // particular case use the "warn" severity instead of the "error"
        // severity.
        caseSensitive: true,
      },
    ],

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

    // This rule is not applicable to a general-purpose ESLint configuration.
    // "import/no-restricted-paths": "off",

    // Although this is considered bad practice for portable code, it would
    // annoy a user who is writing a quick-n-dirty script. Trust that the user
    // knows what they are doing.
    // "import/no-absolute-path": "off",

    // This rule makes sense to have when using a module bundler, but if you are
    // only targeting environments where dynamic require is supported, then it's
    // totally fine, so trust the user.
    // "import/no-dynamic-require": "off",

    // This rule is not applicable to a general-purpose ESLint configuration.
    // "import/no-internal-modules": "off",

    // The user might prefer webpack loader syntax; trust that they know what
    // they are doing.
    // "import/no-webpack-loader-syntax": "off",

    // ----------------
    // Helpful warnings
    // ----------------

    // It is an error to have more than one default export or more than one
    // export with the same name.
    "import/export": "error",

    // If the user accidentally forgets the braces around a named import, and
    // instead tries to use that name as the name of the default import, they
    // probably made a mistake and intended to put braces around the name, since
    // they probably would have used a different name when fetching the default
    // export.
    "import/no-named-as-default": "warn",

    // Although this is *likely* a mistake, it's not *always* a mistake, so
    // trust that the user knows what they are doing. A typechecker could help
    // them detect when this is a mistake with more confidence than this rule.
    // "import/no-named-as-default-member": "off",

    // This rule is a work in progress, so I'm choosing not to touch it for now.
    // I could see enabling it in the future, though, since marking something as
    // deprecated is opt-in.
    // "import/no-deprecated": "off",

    // Since users who use import statements almost always use a package.json,
    // warn if they import a package that isn't listed in their package.json.
    // Note that if there's no package.json in the project, this rule won't flag
    // anything. If that wasn't the case, I would disable this rule to be safe.
    "import/no-extraneous-dependencies": "warn",

    // This is a matter of preference and/or a subjective best practice. It
    // makes sense to worry about in environments that don't properly support
    // mutable exports, but we don't know that (and in practice, babel does, so
    // most users are fine).
    // "import/no-mutable-exports": "off",

    // --------------
    // Module systems
    // --------------

    // Unambiguous JavaScript Grammar seems to have fallen out of favor in the
    // node *.mjs debate, so enforcing it feels weird. Also, unobtrusive assumes
    // modules always anyway, so this isn't very relevant.
    // "import/unambiguous": "off",

    // CommonJS is perfectly valid in several environments; don't require ES
    // modules, because the user may want to use CommonJS.
    // "import/no-commonjs": "off",

    // Likewise, allow AMD.
    // "import/no-amd": "off",

    // Don't warn users about using Node.js builtin modules, because in Node.js,
    // that's a perfectly valid thing to do (and in non-Node.js environments,
    // users may be providing shims anyway, so trust the user).
    // "import/no-nodejs-modules": "off",

    // -----------
    // Style guide
    // -----------

    // Most of these rules are disabled because they are a matter of stylistic
    // preference or formatting. If a reason is omitted, that's the reason.

    // "import/first": "off",
    // exports-last,

    // If you need both a default and a namespace import, this would be a false
    // positive. Either way, though, there's nothing wrong with importing
    // something twice, and if you mess with the require cache in-between doing
    // so, it could actually result in different behavior. So trust that the
    // user knows what they are doing.
    // "import/no-duplicates": "off",

    // "import/no-namespace": "off",
    // "import/extensions": "off",
    // "import/order": "off",
    // "import/newline-after-import": "off",
    // "import/prefer-default-export": "off",
    // "import/max-dependencies": "off",
    // "import/no-unassigned-import": "off",
    // "import/no-named-default": "off",
    // "import/no-anonymous-default-export": "off",
    // "import/group-exports": "off",

    // --------
    // Settings
    // --------
  },

  settings: {
    // This defaults to .js only, but we want .jsx to work out of the box in
    // case the user is using the .jsx extension. Having this here doesn't
    // hurt anything for users who don't use the .jsx extension.
    "import/extensions": [".js", ".jsx"],

    // We don't know enough about the user's code to set useful defaults here.
    // This is commented out because it's the default value.
    // "import/ignore": [],

    // In case the user is targeting electron, we don't want to make a
    // false positive and say that this builtin can't be resolved. This could
    // technically result in a false negative in non-electron environments,
    // but it's unlikely that a user would try to import electron in those
    // environments, and it's better to stay out of the user's way than cause
    // a false positive.
    "import/core-modules": ["electron"],

    // Since it's almost unheard of for users to name a folder
    // "jspm_packages" or "bower_components" when it does *not* contain
    // modules installed by jspm or bower (since those are the default
    // install directory names for those tools), err on the side of avoiding a
    // false positive for jspm and bower users at the low risk of a false
    // negative for non-jspm/bower users.
    "import/external-module-folders": [
      "node_modules", // This is included by default
      "jspm_packages",
      "bower_components",
    ],

    // Since we don't know about the user's environment, there's not really
    // anything to add here. TODO: If a Typescript config is added, it should
    // override this to `{ "typescript-eslint-parser": [".ts", ".tsx"] }`.
    // "import/parsers": {},

    // Assume node resolution algorithm (default behavior). This is correct
    // 99% of the time, and that's good enough for an extra add-on config.
    "import/resolver": {
      node: {
        // These extensions are here for the same reason as "import/extensions"
        extensions: [".js", ".jsx"],
      },
    },

    // There's no reason to tweak this for a general-purpose ESLint config.
    // "import/cache": undefined,
  },
};
