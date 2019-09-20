module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // The rules in this file are listed in the same order as on
    // http://npm.im/eslint-plugin-react (at time of writing).

    // Rules that are turned off are commented out because every rule is off by
    // default in eslint, and we don't want to clobber other configs if you're
    // extending multiple things.

    // Stylistic preference
    // "react/boolean-prop-naming": "off",

    // Subjective best practice
    // "react/button-has-type": "off",

    // Assumes the user uses PropTypes, which may not be true
    // "react/default-props-match-prop-types": "off",

    // Stylistic preference
    // "react/destructuring-assignment": "off",

    // Subjective best practice, or rather, of subjective necessity. Code will
    // work fine without a display name.
    // "react/display-name": "off",

    // Subjective best practice
    // "react/forbid-component-props": "off",

    // Not applicable to a general purpose ESLint configuration
    // "react/forbid-elements": "off",

    // Subjective best practice
    // "react/forbid-prop-types": "off",

    // Only relevant if the user is using
    // babel-plugin-transform-react-remove-prop-types, and most users aren't,
    // since it's not a 100% safe transform.
    // "react/forbid-foreign-prop-types": "off",

    // Subjective best practice; accessing this.state in setState actually
    // often works fine.
    // "react/no-access-state-in-setstate": "off",

    // Sometimes this is your only option; even if it isn't, though, this is a
    // micro-optimization. Trust that the user will profile their code and fix
    // issues if they're important, and won't worry about it if they aren't.
    // "react/no-array-index-key": "off",

    // This is totally fine to do, and is actually a potential workaround for
    // issues with older versions of flow that incorrectly flag children as
    // missing from the list of JSX attributes.
    // "react/no-children-prop": "off",

    // The dangerouslySetInnerHTML name is already enough that the developer
    // will have to think about what they're doing; stay out of their way,
    // because if they're using this, they probably have a reason to.
    // "react/no-danger": "off",

    // Since using dangerouslySetInnerHTML with children will cause React to
    // throw an error at runtime, this is of severity "error".
    "react/no-danger-with-children": "error",

    // For this rule to work, the user would have to opt-in by specifying their
    // React version via their eslint settings (since we don't know it). Since
    // this has to be opt-in, leave it disabled, because the user who is willing
    // to add their React version to their eslint config would presumably also
    // be willing to enable this rule in there.
    // "react/no-deprecated": "off",

    // Subjective best practice; sometimes a double render is the only option
    // (Layout negotiation, etc). Avoiding a double render is a premature
    // optimization anyway.
    // "react/no-did-mount-set-state": "off",

    // Disabled for the same reason as react/no-did-mount-set-state.
    // "react/no-did-update-set-state": "off",

    // Mutating this.state directly (except for in a constructor) may produce
    // undesired behavior at runtime.
    "react/no-direct-mutation-state": "error",

    // Subjective; this will be "speculatively" removed in the future. Better to
    // focus on reality.
    // "react/no-find-dom-node": "off",

    // This prints a warning in React 16 always, but only prints a warning when
    // using ES2015 classes in older React versions. The rule does not only
    // check within ES2015 classes, but flags any occurence of
    // `this.isMounted()`. Since we don't know the user's React version, avoid
    // false positives for users using createClass.
    // "react/no-is-mounted": "off",

    // Stylistic/organizational preference
    // "react/no-multi-comp": "off",

    // Implementing shouldComponentUpdate while extending from PureComponent
    // is probably indicative of an unfinished refactor, since there's no point
    // to extending from PureComponent when you're overriding its
    // shouldComponentUpdate.
    "react/no-redundant-should-component-update": "warn",

    // This is "going to be removed" but works fine in all current React
    // versions (at time of writing). Don't bug the user about imaginary
    // problems.
    // "react/no-render-return-value": "off",

    // Stylistic/ideological preference
    // "react/no-set-state": "off",

    // If the user gets the casing wrong on a class property or lifecycle
    // method, it is probably a typo. Inform the user so that they can correct
    // it, because the code will not work as intended with the wrong casing.
    // Note that this rule will not be flagged on classes which don't extend
    // a class named "Component" or "PureComponent". There is technically room
    // for some false positives here (since you could have something else called
    // Component or PureComponent in your codebase), but the chance of that
    // collision occuring is pretty low in a React codebase (remember that
    // unobtrusive/react is an extra/add-on config intended for React
    // codebases).
    "react/no-typos": "warn",

    // Another one of those "docs say this shouldn't be used, but it works fine"
    // situations that happen so often in React. Leave it up to the user.
    // "react/no-string-refs": "off",

    // Matter of stylistic preference. The typos it finds are not worth the
    // annoyance it causes when it asks you to convert all your `"` and `'` to
    // `&quot;` and `&apos;` even though your code works perfectly fine.
    // "react/no-unescaped-entities": "off",

    // Warn about JSX properties which are written differently in HTML, eg
    // class -> className. Usually this happens when the user is converting some
    // HTML to JSX, and it's not always obvious which prop names need to change,
    // so this rule is helpful. Autofixable.
    "react/no-unknown-property": "warn",

    // Unused prop types usually indicate that the user has some unused code,
    // or hasn't written some code yet, or isn't done with a refactor. So
    // flagging them is helpful.
    "react/no-unused-prop-types": "warn",

    // If the user has defined a property in the state but is not using it, it
    // is likely indicative of unused or leftover code, or an in-progress
    // refactor. It might be a false negative if, for example, the user spreads
    // all their state onto a child prop, but I think the benefit outweighs the
    // drawback here, since that pattern is less common than state only being
    // dereferenced by the component who owns that state. That said, when using
    // the "spread state" pattern, the only way to get eslint to stop yelling at
    // you is to dereference all state directly or use an eslint-disable
    // comment. So I might change my mind about this one.
    "react/no-unused-state": "warn",

    // Setting state directly in componentWillUpdate will cause an infinite
    // loop, which is almost always undesired. Note that the omission of the
    // "disallow-in-func" mode argument to this rule permits setting state
    // within a callback passed to a function within componentWillUpdate.
    "react/no-will-update-set-state": "error",

    // Stylistic preference. Using createClass only prints a deprecation warning
    // in React 15.5.x, and createClass is a separate package in 16,
    // that doesn't print any deprecation warnings. So using this rule to avoid
    // a deprecation warning being printed is not wise, since that deprecation
    // warning is only printed in a small number of React versions.
    // "react/prefer-es6-class": "off",

    // Stylistic preference.
    // "react/prefer-stateless-function": "off",

    // The user may be using flow or TypeScript instead of PropTypes, so stay
    // out of their way.
    // "react/prop-types": "off",

    // This flags that React must be in scope in order to use JSX expressions.
    // Failure to do so will result in a ReferenceError being thrown at runtime.
    // If the user is setting React as a global, then this will be a false
    // positive, but since using a global is relatively uncommon, and forgetting
    // to import React is a common mistake, and `unobtrusive` already requires
    // its users to tweak the eslint config a bit when using globals, this is
    // worth having on.
    "react/react-in-jsx-scope": "error",

    // Stylistic preference. Some users are okay with using "undefined" as
    // an implicit default value of a non-required prop.
    // "react/require-default-props": "off",

    // This is a premature optimization. In fact, using shouldComponentUpdate
    // everywhere can actually make your code slower, if performing the
    // shouldComponentUpdate check takes longer than it would take to diff the
    // tree.
    // "react/require-optimization": "off",

    // If you forget to return from your render method, React will throw an
    // error.
    "react/require-render-return": "error",

    // Matter of stylistic preference; even though it's autofixable, it's more
    // polite to stay out of the user's way.
    // "react/self-closing-comp": "off",

    // Stylistic/organizational preference.
    // "react/sort-comp": "off",

    // Stylistic preference
    // "react/sort-prop-types": "off",

    // This rule only makes sense for host components in React DOM, but it flags
    // for all components, including composite components and non-DOM host
    // components. It's better to avoid false positives, especially since this
    // is the kind of mistake a user makes once and never again (React throws
    // a descriptive error message if you pass a string style).
    // "react/style-prop-object": "off",

    // React will print an error if you try to give children to an img, br, or
    // hr. This is almost always a mistake.
    "react/void-dom-elements-no-children": "warn",

    // ------------------
    // JSX-specific rules
    // ------------------

    // Matter of stylistic preference
    // "react/jsx-boolean-value": "off",

    // Formatting/style rule
    // "react/jsx-closing-bracket-location": "off",

    // Formatting/style rule
    // "react/jsx-closing-tag-location": "off",

    // Formatting/style rule
    // "react/jsx-curly-spacing": "off",

    // Formatting/style rule
    // "react/jsx-equals-spacing": "off",

    // It's valid to use JSX in a *.js file in many projects; don't bother the
    // user about it.
    // "react/jsx-filename-extension": "off",

    // Formatting/style rule
    // "react/jsx-first-prop-new-line": "off",

    // Matter of preference
    // "react/jsx-handler-names": "off",

    // Formatting/style rule
    // "react/jsx-indent": "off",

    // Formatting/style rule
    // "react/jsx-indent-props": "off",

    // Since React will print a warning in the console if you omit keys, we
    // will warn about it.
    "react/jsx-key": "warn",

    // Formatting/style rule
    // "react/jsx-max-props-per-line": "off",

    // Premature and often misguided optimization
    // "react/jsx-no-bind": "off",

    // This is almost always a mistake, sometimes due to limitations in the
    // user's editor. Even though there are possible false positives (where the
    // user wanted to put comment-like syntax in as a text node), since that is
    // very uncommon, and there is a workaround for that case (use a string as
    // the JSX children), we'll enable this.
    "react/jsx-no-comment-textnodes": "warn",

    // Duplicate props are probably the result of unused code or an in-progress
    // refactor. They behave like object properties, where the last one in wins.
    // There's usually no reason to use duplicate props, so warn the user.
    "react/jsx-no-duplicate-props": "warn",

    // This is subjective best-practice, and having this rule on would require
    // the user to change the code in situations where they weren't going to
    // change it, and it was working fine.
    // "react/jsx-no-literals": "off",

    // There are legitimate uses of target _blank without
    // `rel="noreferrer noopener"`, such as when building a multi-window website
    // that relies on postMessage for communication. Stay out of the user's way.
    // "react/jsx-no-target-blank": "off",

    // This is just like no-undef, but for identifier references in JSX
    // elements. Typos and mistakes could cause a ReferenceError, so the
    // severity is error. We allow globals because some applications may rely
    // on React components defined as globals by eg. UMD wrappers. Allowing
    // globals may obscure some situations where a user forgot an import (for
    // example, when referencing the HTML Image constructor instead of a
    // component with the same name), but since that's what would happen at
    // runtime anyway, allow it.
    "react/jsx-no-undef": ["error", { allowGlobals: true }],

    // Stylistic preference/subjective best practice
    // "react/jsx-one-expression-per-line": "off",

    // Formatting/style rule
    // "react/jsx-curly-brace-presence": "off",

    // Formatting/style rule
    // "react/jsx-pascal-case": "off",

    // Formatting/style rule
    // "react/jsx-sort-props": "off",

    // Formatting/style rule
    // "react/jsx-space-before-closing": "off",

    // Formatting/style rule
    // "react/jsx-tag-spacing": "off",

    // This marks the "React" variable as used when there's JSX in the file.
    // This prevents no-unused-vars from marking React as unused as a false
    // positive.
    "react/jsx-uses-react": "warn",

    // This marks composite component variables as used when they are referenced
    // in a JSX element. This prevents no-unused-vars from marking those
    // variables as unused as a false positive.
    "react/jsx-uses-vars": "warn",

    // Formatting/style rule
    // "react/jsx-wrap-multilines": "off",
  },
};
