module.exports = {
  // Assume the user is using ES modules, so we're always in a module context.
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017,
  },

  rules: {
    // The rules in this file are laid out in the same categories and in the
    // same order as on https://eslint.org/docs/rules/ (at time of writing).

    // Rules that are turned off are commented out because every rule is off by
    // default in eslint, and we don't want to clobber other configs if you're
    // extending multiple things.

    // ---------------
    // Possible Errors
    // ---------------

    // If you use the wrong greater than / less than sign in a for loop, it will
    // create an infinite loop condition. This is almost always unintentional.
    "for-direction": "error",

    // It's very rare that a user will create a getter with no return
    // value; such a case is likely the result of unfinished or leftover code.
    // If the user wants to define a getter that always returns
    // `undefined`, they can use `return undefined`.
    "getter-return": "warn",

    // The rationale behind turning this rule on is that using Promise.all is
    // better than using await in a loop, because work can be parallelized.
    // This is true for eg. making multiple network requests at once, however,
    // there are many situations where the order in which items are processed
    // asyncronously are affects the code's behavior, so this rule could get in
    // the way.
    // "no-await-in-loop": "off",

    // Even though this behavior may be unintuitive, "behavior is unintuitive"
    // is not a good enough reason to flag a user from writing code that may
    // work as intended; disallowing this is a subjective best-practice.
    // "no-compare-neg-zero": "off",

    // Using assignment inside of a conditional statement is uncommon, but there
    // are valid reasons to do it nonetheless. However it *may* indicate a typo,
    // because the user instead intended to use a conditional operator. I went
    // back and forth on this one, because I didn't want to force a user to
    // change their code when it was valid at runtime, but the pattern is also
    // relatively uncommon. I chose to enable it with the "except-parens" option
    // because it felt like a reasonable compromise, and prettier prints parens
    // in this case to make it clear that it's an assignment and not a
    // comparison.
    "no-cond-assign": ["warn", "except-parens"],

    // Discouraging the user from using the console is very rude; it's a
    // valid and useful part of JavaScript. Trust the user.
    // "no-console": "off",

    // A constant condition usually indicates that code is in an incomplete
    // state or that the user is testing its functionality, so warn.
    // However, don't warn about loops (checkLoops option) because
    // `while (true) {}` and etc is a very common idiom. So this only warns
    // about `if (true) {}` and etc.
    "no-constant-condition": ["warn", { checkLoops: false }],

    // There are many valid reasons to want to match control characters in a
    // regular expression. Trust the user.
    // "no-control-regex": "off",

    // Disallowing debugger statements is annoying in the editor. They should
    // probably not be in production code but it's not worth annoying the
    // user over (and they don't hurt anything anyway).
    // "no-debugger": "off",

    // This rule disallows using the same name for function parameters. This is
    // an error in strict mode, which we assume you are in since you're using
    // modules.
    "no-dupe-args": "error",

    // If you have duplicate object keys in your application, the last one in
    // wins. But, this is kind of weird. Often, this rule appears when you're
    // reorganizing some code, so it can be useful to see the duplicates
    // underlined at a glance.
    "no-dupe-keys": "warn",

    // If you have duplicate cases in a switch statement, the first one wins, so
    // there's not really a valid reason to do that. This is probably the result
    // of the user copying or refactoring some code, so help them find the
    // unused code to remove.
    "no-duplicate-case": "warn",

    // This rule concerns whether empty block statements are allowed (only
    // block statements, not function bodies). Usually, an empty block
    // statement is the result of unused or leftover code, so flag it for the
    // user. However, allow empty try/catch statements, because many
    // users use those to ignore errors (and because we don't want to flag
    // an empty catch in a try/catch/finally).
    "no-empty": ["warn", { allowEmptyCatch: true }],

    // An empty character class in a RegExp (`[]`) does not match anything, and
    // so is probably a typo (the user may have intended `\[\]`, for example).
    // If it isn't a typo, it's unused code, so I don't feel bad warning about
    // it.
    "no-empty-character-class": "warn",

    // The user may want to intentionally do this in order to short-circuit
    // some errors. I think that's kind of weird, but it's totally valid code.
    // "no-ex-assign": "off",

    // Although unnecessary, this does not hurt anything; the code works fine if
    // you cast to boolean inside of a conditional expression. Stay out of the
    // user's way.
    // "no-extra-boolean-cast": "off",

    // Style/formatting rule. Extra parens don't hurt anything, and in what
    // situation a paren is considered "extra" is highly subjective, so stay out
    // of the user's way. (Not sure why it's listed under "Possible Errors"
    // on ESLint's website...)
    // "no-extra-parens": "off",

    // Style/formatting rule. Extra semis don't hurt anything, so stay out of
    // the user's way.
    // "no-extra-semi": "off",

    // Although uncommon, this is a valid thing to do, and the value in flagging
    // it is not very high. So stay out of the user's way.
    // "no-func-assign": "off",

    // This is hard to do on accident, so stay out of the user's way. Even
    // though the scope in which a declaration appears may be unintuitive,
    // that is subjective and therefore not a good enough reason to flag the
    // user. There's not much value in doing so, in particular since we
    // have const/let now.
    // "no-inner-declarations": "off",

    // An invalid RegExp string will throw a SyntaxError at runtime.
    "no-invalid-regexp": "error",

    // This rule exists to help catch uncommon whitespace characters, such as
    // no-break space, because they may result in parsing errors. However, the
    // ECMAScript specification says that no-break space and a few other
    // uncommon whitespace characters should be treated as whitespace. It's
    // unlikely that these characters will show up in a user's codebase, and if
    // they do, according the spec, some of them might be allowed, so since the
    // value of helping the user here is pretty low, just leave this rule off.
    // "no-irregular-whitespace": "off",

    // This rule is about whether to allow `Math()`, `JSON()`, and `Reflect()`.
    // Note that these are present in every JS environment (and as such,
    // unlikely to be overwritten). Attempting to do this will throw in a
    // TypeError at runtime.
    "no-obj-calls": "error",

    // This rule prefers eg `Object.prototype.hasOwnProperty.call(foo, "bar")`
    // over `foo.hasOwnProperty("bar")`, because `foo` might be an Object with
    // no prototype (`Object.create(null)`). But this is only a problem if you
    // use Objects without prototypes, and the user usually knows when they are
    // or aren't. Stay out of the user's way. This is really the type checker's
    // job anyway.
    // "no-prototype-builtins": "off",

    // This rule prefers `/foo {3}bar/` over `/foo   bar/`. Both are valid, so
    // stay out of the user's way.
    // "no-regex-spaces": "off",

    // This rule is saying that sparse arrays are subjectively unintuitive.
    // Subjective unintuitiveness isn't a good enough reason to yell at the
    // user, because they might have wanted to do this on purpose. So stay
    // out of the user's way.
    // "no-sparse-arrays": "off",

    // The user might want this, for example when using internationalization or
    // localization libraries. Stay out of the user's way.
    // "no-template-curly-in-string": "off",

    // This rule warns about ASI gotchas where code that appears to be two
    // statements or expressions is actually one statement/expression (it's only
    // relevant when not using semicolons, and relying on ASI to do it for you
    // instead). Since this is only relevant to users using a semicolon-less
    // style, and *technically* a user could intend to format their code in this
    // way that I consider subjectively confusing, I'm going to choose to stay
    // out of the user's way, because the value-add is stunted by the fact that
    // only a subset of users of this configuration will gain anything from it.
    // However, if you are using a semicolon-less style in your code, it
    // probably makes sense to turn this on in your eslint config.
    // "no-unexpected-multiline": "off",

    // Unreachable code is usually unfinished or leftover code or the result of
    // unfinished refactoring. It's helpful to show to the user.
    "no-unreachable": "warn",

    // This rule considers the fact that a return statement in a finally block
    // takes precedence over a return statement in a try block to be
    // unintuitive. However, this is subjective, and using this pattern is valid
    // JavaScript, so stay out of the user's way.
    // "no-unsafe-finally": "off",

    // This rule attempts to protect users from operator precedences that it
    // finds unintuitive, but these are subjective, so stay out of the user's
    // way (because the user could write totally valid code that this rule
    // doesn't like).
    // "no-unsafe-negation": "off",

    // This is another one of those "subjectively unintuitive" rules. The only
    // reason I could think of that a user might want to do a ==/=== check
    // against NaN would be to demonstrate that it's always false, so I
    // considered leaving this rule on... but I don't think it has much
    // value-add, and in the one case where a user is trying to demonstrate
    // that, it would be annoying to be flagged by the linter, so let's just
    // leave this one off.
    // "use-isnan": "off",

    // Users might write comments that appear to be JSDoc comments, but are not,
    // which this rule would flag as invalid (for example, when using Google's
    // Closure Compiler). So this rule is not safe to recommend blindly.
    // "valid-jsdoc": "off",

    // This rule warns about typos in typeof comparisons, for example,
    // `typeof foo === "undefimed"`. With the `requireStringLiterals` option set
    // to false, it allows typeof comparisons to identifiers and other
    // expressions, so the only case where this rule could cause a false
    // positive for the user would be when the user is interacting with host
    // objects that have implemented custom behavior with the JS engine. Since
    // this is pretty uncommon, and typos are pretty common, this rule is
    // enabled.
    "valid-typeof": ["warn", { requireStringLiterals: false }],

    // --------------
    // Best Practices
    // --------------

    // Subjective best practice; stay out of the user's way.
    // "accessor-pairs": "off",

    // This rule would be useful if it could truly only operate on arrays, but
    // it will check callbacks passed to methods on objects that are not arrays
    // whose method names match those of array. For example, an imaginary timer
    // object with an "every" method that should run once a second:
    // `ticker.every(() => { console.log("hi"); })`. This rule would flag that
    // because it thinks that `ticker.every` refers to `Array.prototype.every`.
    // Although the chance of collision is low, it's better to stay out of the
    // user's way.
    // "array-callback-return": "off",

    // Subjective best practice; stay out of the user's way.
    // "block-scoped-var": "off",

    // Subjective best practice; stay out of the user's way.
    // "class-methods-use-this": "off",

    // Subjective best practice, and often inaccurate; stay out of the user's
    // way.
    // complexity: "off",

    // Nice to have, but omitting "return undefined" can be valid, so stay out
    // of the user's way. Use a type checker to solve the problems this rule is
    // trying to solve.
    // "consistent-return": "off",

    // Style/formatting rule
    // curly: "off",

    // This is the tail wagging the dog... there are all kinds of reasons to
    // make a switch statement without a default case.
    // "default-case": "off",

    // Style/formatting rule
    // "dot-location": "off",

    // Style/formatting rule
    // "dot-notation": "off",

    // Subjectively unintuitive; stay out of the user's way.
    // eqeqeq: "off",

    // Subjectively unintuitive; stay out of the user's way.
    // "guard-for-in": "off",

    // Even if they're considered "unfashionable" in some circles, `alert`,
    // `confirm` and `prompt` are totally valid and useful parts of JavaScript
    // (at least in the browser).
    // "no-alert": "off",

    // I was originally going to disable this rule because I assumed it only
    // existed to discourage a V8 deopt (and I don't want to encourage premature
    // optimization), but since accessing arguments.caller and arguments.callee
    // is disallowed in strict mode, and this configuration assumes the user is
    // using modules (and therefore implicitly in strict mode), this rule should
    // actually be enabled with the "error" severity, since attempting to access
    // the property throws a TypeError at runtime.
    "no-caller": "error",

    // Subjectively unintuitive; stay out of the user's way.
    // "no-case-declarations": "off",

    // Subjectively confusing; stay out of the user's way.
    // "no-div-regex": "off",

    // Pointless; the code will work the same either way. Stay out of the user's
    // way.
    // "no-else-return": "off",

    // Even though I have no-empty set to `warn`, This one is off because no-op
    // functions are more common than you might think (in tests, when stubbing
    // stuff out, as default values, the list goes on). So instead of assuming
    // that every empty function represents unfinished code, we should stay out
    // of the user's way.
    // "no-empty-function": "off",

    // Style/formatting rule
    // "no-empty-pattern": "off",

    // Subjective best practice; comparing to null with == or != is a common
    // idiom for those who are familiar with its behavior.
    // "no-eq-null": "off",

    // You shouldn't abuse eval, but disallowing it altogether is too much; it
    // has valid uses. Stay out of the user's way.
    // "no-eval": "off",

    // A subjective best practice; users may have legitimate reasons to do this.
    // They may be writing a test runner (object.should.equal(4)), or they might
    // be writing a polyfill, or they may be in control of the host environment.
    // Whatever the reason, stay out of the user's way.
    // "no-extend-native": "off",

    // This doesn't hurt anything, and I've seen this pattern so rarely that I
    // don't think there's much value-add. So let's just leave this off.
    // "no-extra-bind": "off",

    // Some refactoring (probably) has caused the label to not be needed
    // anymore; since it's unused or leftover, the user will probably consider
    // it helpful if we point out that it can be removed.
    "no-extra-label": "warn",

    // Subjectively unintuitive; stay out of the user's way.
    // "no-fallthrough": "off",

    // Style/formatting rule
    // "no-floating-decimal": "off",

    // Even though code flagged by this rule may work perfectly fine, this rule
    // is enabled because there are situations where no-undef will not flag an
    // assignment whose name collides with a global, and you might not be aware
    // that the name you are assigning to is a global (and you want to use a
    // variable with the same name, but you haven't declared it yet). So this
    // rule is enabled to try to cover no-undef's weaknesses, However, because
    // we don't have the same level of confidence that this will cause a
    // ReferenceError as we do with no-undef, this is only "warn" severity.
    "no-global-assign": "warn",

    // Matter of preference. Stay out of the user's way.
    // "no-implicit-coercion": "off",

    // This rule never applies since this config assumes modules.
    // "no-implicit-globals": "off",

    // This might be intentional; stay out of the user's way.
    // "no-implied-eval": "off",

    // Subjective best practice; stay out of the user's way.
    // "no-invalid-this": "off",

    // The user might be targeting old SpiderMonkey; stay out of their way.
    // "no-iterator": "off",

    // Labeled statements are part of the language; stay out of the user's way.
    // "no-labels": "off",

    // In ES2015+ (which is assumed by this config), lone blocks are useful. In
    // ES5 and below, even though they don't create a new scope, they don't hurt
    // anything either. So this falls under not applicable/stay out of the
    // user's way.
    // "no-lone-blocks": "off",

    // Subjectively unintuitive; stay out of the user's way.
    // "no-loop-func": "off",

    // Subjective best practice, and annoying even if you agree that it's a
    // best practice. Stay out of the user's way.
    // "no-magic-numbers": "off",

    // Style/formatting rule
    // "no-multi-spaces": "off",

    // Style/formatting rule
    // "no-multi-str": "off",

    // This rule exists to discourage constructors with side effects. But that's
    // a matter of preference. Stay out of the user's way.
    // "no-new": "off",

    // Similar to no-eval. There are valid reasons to use the Function
    // constructor, so stay out of the user's way.
    // "no-new-func": "off",

    // Subjectively unintuitive (though it's hard to argue against). Even so,
    // better to stay out of the user's way, just in case.
    // "no-new-wrappers": "off",

    // This rule disallows the deprecated leading-zero octal syntax (071 == 57),
    // but allows the ES2015 0o71 syntax. Since this config assumes an ES2015
    // module context, trying to use the old syntax will result in a
    // SyntaxError, so this is an error.
    "no-octal": "error",

    // Like no-octal, trying to use the "\251" syntax in ES2015 will cause a
    // SyntaxError.
    "no-octal-escape": "error",

    // Subjectively unintuitive; stay out of the user's way.
    // "no-param-reassign": "off",

    // Allegedly deprecated, but doesn't throw any errors in ES2015, so don't
    // bother the user about it.
    // "no-proto": "off",

    // Subjectively unintuitive or bad practice; stay out of the user's way.
    // "no-redeclare": "off",

    // Not applicable to a general-case ESLint configuration.
    // "no-restricted-properties": "off",

    // Subjectively confusing; allegedly catches typos, but I've rarely seen
    // this in practice. Stay out of the user's way.
    // "no-return-assign": "off",

    // This is premature optimization at best and behavior-breaking at worst
    // (in situations where the user intends to wait 2 microtasks and is just
    // doing so in an odd way). Better to stay out of the user's way.
    // "no-return-await": "off",

    // Same as no-eval; there's valid reasons to use this. Stay out of the
    // user's way
    // "no-script-url": "off",

    // This rule usually indicates that you started refactoring an object or
    // array pattern and didn't finish, so it's helpful. There's never a reason
    // to do this normally.
    "no-self-assign": "warn",

    // Usually comparing a variable to itself (x === x) is pointless, but some
    // users may use it to detect NaN. They should probably use Number.isNaN
    // instead, but their code will work fine, so just stay out of their way.
    // "no-self-compare": "off",

    // The sequence operator is a valid and useful part of the language.
    // Don't arbitrarily tell users not to use it just because it's uncommon.
    // "no-sequences": "off",

    // Subjective best practice, but valid code. Stay out of the user's way.
    // "no-throw-literal": "off",

    // If looping and using something other than "true" (or "false" I guess) as
    // the condition, you want to modify the condition within the loop body 99%
    // of the time. So a situation where you don't is likely a mistake.
    "no-unmodified-loop-condition": "warn",

    // Unused expressions generally indicate unused or leftover code as a result
    // of refactoring. So this is useful to the user, unless they rely on getter
    // side effects (chai)... but since those are relatively uncommon, and this
    // rule provides a lot of value in all other situations, I'm going to leave
    // it on.
    "no-unused-expressions": [
      "warn",
      {
        // Allow eg. optionConfigured && doIt();
        allowShortCircuit: true,
        // Allow eg. optionConfigured ? doIt() : null;
        allowTernary: true,
        // Allow eg. taggedTemplateStringFunctionWithSideEffects`yup`;
        allowTaggedTemplates: true,
      },
    ],

    // Points out unused or leftover code from refactoring; helpful.
    "no-unused-labels": "warn",

    // Premature optimization for little benefit, or a stylstic preference.
    // "no-useless-call": "off",

    // The code works either way and there's no benefit to changing it. This is
    // basically a stylistic preference.
    // "no-useless-concat": "off",

    // Even though you don't *need* to escape them, doing so doesn't hurt
    // anything. If this rule was autofixable I might consider turning it on
    // under the reasoning that a user has some unused code left in a RegExp
    // they were refactoring. But since it's not autofixable, it'll just
    // pointlessly annoy the user. So don't bother.
    // "no-useless-escape": "off",

    // These don't hurt anything, so it's annoying to ask the user to remove
    // them. I might consider enabling this rule if this pattern showed up
    // enough in refactoring, but I've worked with configs where this rule was
    // enabled pretty often and almost never saw it.
    // "no-useless-return": "off",

    // Stylistic choice; let the user decide whether they want to use it.
    // "no-void": "off",

    // Some users don't want any TODO comments and etc in their code, some are
    // okay committing them and not addressing them for years. Don't bother the
    // user about them since we don't know which group they're in.
    // "no-warning-comments": "off",

    // With statements are disallowed in strict mode, and module contexts are
    // implcitly in strict mode, and this config assumes module context always.
    // So since this will throw a SyntaxError, the severity is error.
    "no-with": "error",

    // Subjective best practice
    // "prefer-promise-reject-errors": "off",

    // Subjective best practice
    // radix: "off",

    // Although a removal of all the await expressions from an async function
    // may indicate that refactoring has removed the need for the function to be
    // async, users may want to keep the function as async in order to maintain
    // its Promise return type, for either backwards-compatibility or
    // future-proofing reasons. So don't yell at them about that.
    // "require-await": "off",

    // Trying to solve an issue which is subjectively unintuitive. Don't bother
    // the user about something that they may understand perfectly fine.
    // "vars-on-top": "off",

    // Style/formatting rule
    // "wrap-iife": "off",

    // Either way works fine; matter of preference. Allow both styles.
    // yoda: "off",

    // -----------
    // Strict Mode
    // -----------

    // We assume sourceType is always module with this config, so strict mode is
    // implcitly enabled anyway. So you don't need to add the directive.
    // strict: "off",

    // ---------
    // Variables
    // ---------

    // Arbitrarily consistent for the sake of consistency. Don't bother the user
    // with pointlessness.
    // "init-declarations": "off",

    // This attempts to protect against an IE8-specific bug. Most ES2015
    // programs are probably not going to target IE8. It's not worth bothering
    // the 99% to save the 1% in this case.
    // "no-catch-shadow": "off",

    // This is a SyntaxError in strict mode.
    "no-delete-var": "error",

    // Subjective bad practice. Don't get in the user's way
    // "no-label-var": "off",

    // Not applicable to a general-purpose ESLint config
    // "no-restricted-globals": "off",

    // Shadowing is common in some programming styles. Avoiding it because it's
    // considered bad practice is subjective.
    // "no-shadow": "off",

    // The user *really* shouldn't do this, but there's no case where you'd do
    // it on accident, so don't get in their way...
    // "no-shadow-restricted-names": "off",

    // Usually, no-undef is an indicator that you made a typo when referencing
    // a variable (or that you haven't declared it yet). So this rule is
    // helpful. In the cases where you didn't make a typo, you might need to add
    // a global to your eslint config. Since non-standard globals are less
    // common in projects using ECMAScript modules, this is a tradeoff we are
    // willing to make in order to catch the typo early.
    // This rule is of "error" severity because it would throw a ReferenceError.
    "no-undef": "error",

    // Stylistic choice, that could actually get in the way in certain
    // circumstances.
    // "no-undef-init": "off",

    // It's very uncommon to shadow or overwrite undefined, so don't make the
    // user write `void 0` everywhere just because someone technically *could*
    // shadow or overwrite `undefined`. If they are going to run the code in an
    // untrusted sandbox and are worried about security, they can use a babel
    // plugin to transform `undefined` to `void 0` at build-time. However, since
    // the most common untrusted sandbox is the browser, and most minifiers
    // change `undefined` into `void 0` anyway, this might not even be
    // necessary.
    // Either way, writing the word "undefined" is very common; stay out of the
    // user's way.
    // "no-undefined": "off",

    // This rule is usually indicative that you created a variable that you
    // don't need after all. So it's helpful. But I added args: "none" because
    // I don't want it to flag function parameters, because it can be useful to
    // know what a function will receive even if you aren't using everything it
    // receives yet.
    "no-unused-vars": ["warn", { args: "none" }],

    // If it was possible to enable this rule only for `let` and `const`, I
    // would like to enable it, because using a binding created with `let` or
    // `const` before its definition results in a ReferenceError at runtime
    // (temporal dead zone). However, if you turn on this rule, it also affects
    // `var`, even though `var` can be used on a line before its definition.
    // Since this rule could flag code that is valid, it's safer to turn it off.
    // "no-use-before-defined": "off",

    // --------------------
    // Node.js and CommonJS
    // --------------------

    // This heuristic is only safe in Node, and I don't want to flag non-errback
    // functions that ESLint thinks are errback functions, because that would
    // annoy the user.
    // "callback-return": "off",

    // Stylistic choice
    // "global-require": "off",

    // Similar to callback-return, this heuristic is only safe in node.
    // "handle-callback-err": "off",

    // If the user is supporting Node 4.x where Buffer.from and Buffer.alloc are
    // not added yet, then they need to use the Buffer constructor.
    // "no-buffer-constructor": "off",

    // Stylistic preference
    // "no-mixed-requires": "off",

    // Stylistic preference/subjectively confusing
    // "no-new-require": "off",

    // Not every string concatenation with __filename or __dirname is creating
    // a path; the user could write eg. `__filename + " is a very nice file"`.
    // "no-path-concat": "off",

    // Ideologic preference. This one is particularly annoying when interacting
    // with dependencies that require env variables, because then it's not your
    // choice, but the linter yells at you anyway. Even if it is their choice,
    // though, there are tradeoffs to using environment variables and the user
    // may have a valid reason for using them. So don't bother the user about
    // this.
    // "no-process-env": "off",

    // It's a good practice to avoid this in node library code, but it's valid
    // to use this in node application code. Either way, the code works as
    // written, so trust that the user knows what they are doing.
    // "no-process-exit": "off",

    // Not applicable to a general-purpose ESLint config
    // "no-restricted-modules": "off",

    // Sync is okay in some contexts, and considered bad practice in others. But
    // it's subjective, so leave it up to the developer to decide.
    // "no-sync": "off",

    // ----------------
    // Stylistic Issues
    // ----------------

    // All of these are disabled because this config doesn't do any style stuff,
    // since it's highly subjective. You should configure that yourself, or use
    // a code formatter or style guide tool.
    // "array-bracket-newline": "off",
    // "array-bracket-spacing": "off",
    // "array-element-newline": "off",
    // "block-spacing": "off",
    // "brace-style": "off",
    // camelcase: "off",
    // "capitalized-comments": "off",
    // "comma-dangle": "off",
    // "comma-spacing": "off",
    // "comma-style": "off",
    // "computed-property-spacing": "off",
    // "consistent-this": "off",
    // "eol-last": "off",
    // "func-call-spacing": "off",
    // "func-name-matching": "off",
    // "func-names": "off",
    // "func-style": "off",
    // "function-paren-newline": "off",
    // "id-blacklist": "off",
    // "id-length": "off",
    // "id-match": "off",
    // indent: "off",
    // "jsx-quotes": "off",
    // "key-spacing": "off",
    // "keyword-spacing": "off",
    // "line-comment-position": "off",
    // "linebreak-style": "off",
    // "lines-around-comment": "off",
    // "lines-between-class-members": "off",
    // "max-depth": "off",
    // "max-len": "off",
    // "max-lines": "off",
    // "max-nested-callbacks": "off",
    // "max-params": "off",
    // "max-statements": "off",
    // "max-statements-per-line": "off",
    // "multiline-comment-style": "off",
    // "multiline-ternary": "off",
    // "new-cap": "off",
    // "new-parens": "off",
    // "newline-per-chained-call": "off",
    // "no-array-constructor": "off",
    // "no-bitwise": "off",
    // "no-continue": "off",
    // "no-inline-comments": "off",
    // "no-lonely-if": "off",
    // "no-mixed-operators": "off",
    // "no-mixed-spaces-and-tabs": "off",
    // "no-multi-assign": "off",
    // "no-multiple-empty-lines": "off",
    // "no-negated-condition": "off",
    // "no-nested-ternary": "off",
    // "no-new-object": "off",
    // "no-plusplus": "off",
    // "no-restricted-syntax": "off",
    // "no-tabs": "off",
    // "no-ternary": "off",
    // "no-trailing-spaces": "off",
    // "no-underscore-dangle": "off",
    // "no-unneeded-ternary": "off",
    // "no-whitespace-before-property": "off",
    // "nonblock-statement-body-position": "off",
    // "object-curly-newline": "off",
    // "object-curly-spacing": "off",
    // "object-property-newline": "off",
    // "one-var": "off",
    // "one-var-declaration-per-line": "off",
    // "operator-assignment": "off",
    // "operator-linebreak": "off",
    // "padded-blocks": "off",
    // "padding-line-between-statements": "off",
    // "quote-props": "off",
    // quotes: "off",
    // "require-jsdoc": "off",
    // semi: "off",
    // "semi-spacing": "off",
    // "semi-style": "off",
    // "sort-keys": "off",
    // "sort-vars": "off",
    // "space-before-blocks": "off",
    // "space-before-function-paren": "off",
    // "space-in-parens": "off",
    // "space-infix-ops": "off",
    // "space-unary-ops": "off",
    // "spaced-comment": "off",
    // "switch-colon-spacing": "off",
    // "template-tag-spacing": "off",
    // "unicode-bom": "off",
    // "wrap-regex": "off",

    // ------------
    // ECMAScript 6
    // ------------

    // Stylistic preference
    // "arrow-body-style": "off",

    // Stylistic preference
    // "arrow-parens": "off",

    // Stylistic preference
    // "arrow-spacing": "off",

    // This flags a few cases that become errors at runtime.
    "constructor-super": "error",

    // Stylistic preference
    // "generator-star-spacing": "off",

    // It's hard to do this on accident, so trust that if it happens, the user
    // is doing it on purpose, and stay out of their way.
    // "no-class-assign": "off",

    // Subjectively confusing; trust the user.
    // "no-confusing-arrow": "off",

    // Reassigning a const raises a TypeError at runtime. It might work in
    // babel-ified code, but it shouldn't.
    "no-const-assign": "error",

    // Similar to no-dupe-keys, this rule usually indicates that you did not
    // finish refactoring a class, or unintentionally re-used a method name, and
    // is therefore useful.
    "no-dupe-class-members": "warn",

    // This has false positives with flow `import type` statements, and so can
    // be very annoying. Code with duplicate imports works fine anyway, so
    // there's not much value-add even if flow imports didn't false positive
    // out of the box.
    // "no-duplicate-imports": "off",

    // new Symbol("foo") throws a TypeError at runtime.
    "no-new-symbol": "error",

    // This rule is not applicable in a general-purpose ESLint configuration
    // "no-restricted-imports": "off",

    // Using `this` before `super` in the constructor method of a class will
    // throw a ReferenceError at runtime.
    "no-this-before-super": "error",

    // Stylistic preference
    // "no-useless-computed-key": "off",

    // This rule usually pops up when you had something in the constructor, but
    // then you removed it, and now the constructor isn't doing anything, so you
    // could remove it. So it pops up in refactoring a lot, so it's useful.
    "no-useless-constructor": "warn",

    // You can't really do this on accident, so if the user chooses to do that,
    // no reason to yell at them...
    // "no-useless-rename": "off",

    // No reason to arbitrarily restrict parts of the language...
    // "no-var": "off",

    // Stylistic preference
    // "object-shorthand": "off",

    // Stylistic preference
    // "prefer-arrow-callback": "off",

    // Stylistic preference
    // "prefer-const": "off",

    // Stylistic preference
    // "prefer-destructuring": "off",

    // Arbitrary consistency for no gain
    // "prefer-numeric-literals": "off",

    // Subjective best practice/stylistic preference
    // "prefer-rest-params": "off",

    // Stylistic preference
    // "prefer-spread": "off",

    // Stylistic preference
    // "prefer-template": "off",

    // Similar to require-await, there are legitimate reasons to make a
    // generator without any yield expressions inside.
    // "require-yield": "off",

    // Stylistic preference
    // "rest-spread-spacing": "off",

    // Stylistic preference / arbitrary
    // "sort-imports": "off",

    // Not required, so trust the user about it
    // "symbol-description": "off",

    // Stylistic preference
    // "template-curly-spacing": "off",

    // Stylistic preference
    // "yield-star-spacing": "off"
  },
};
