module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    // Mutating this.state directly (except for in a constructor) may produce
    // undesired behavior at runtime.
    "react/no-direct-mutation-state": "error",

    // Warn about JSX properties which are written differently in HTML, eg
    // class -> className. Usually this happens when the user is converting some
    // HTML to JSX, and it's not always obvious which prop names need to change,
    // so this rule is helpful. Autofixable.
    "react/no-unknown-property": "warn",

    // Unused prop types usually indicate that the user has some unused code,
    // or hasn't written some code yet, or isn't done with a refactor. So
    // flagging them is helpful.
    "react/no-unused-prop-types": "warn",

    // This flags that React must be in scope in order to use JSX expressions.
    // Failure to do so will result in a ReferenceError being thrown at runtime.
    // If the user is setting React as a global, then this will be a false
    // positive, but since using a global is relatively uncommon, and forgetting
    // to import React is a common mistake, and `unobtrusive` already requires
    // its users to tweak the eslint config a bit when using globals, this is
    // worth having on.
    "react/react-in-jsx-scope": "error",

    // Implementing shouldComponentUpdate while extending from PureComponent
    // is probably indicative of an unfinished refactor, since there's no point
    // to extending from PureComponent when you're overriding its
    // shouldComponentUpdate.
    "react/no-redundant-should-component-update": "warn",

    // If the user gets the casing wrong on a class property or lifecycle
    // method, it is probably a typo. Inform the user so that they can correct
    // it, because the code will not work as intended with the wrong casing.
    "react/no-typos": "warn",

    // If the user has defined a property in the state but is not using it, it
    // is likely indicative of unused or leftover code, or an in-progress
    // refactor.
    "react/no-unused-state": "warn",

    // React will print an error if you try to give children to an img, br, or
    // hr. This is almost always a mistake.
    "react/void-dom-elements-no-children": "warn",

    // Since React will print a warning in the console if you omit keys, we
    // will warn about it.
    "react/jsx-key": "warn",

    // Duplicate props are probably the result of unused code or an in-progress
    // refactor. They behave like object properties, where the last one in wins.
    // There's usually no reason to use duplicate props, so warn the user.
    "react/jsx-no-duplicate-props": "warn",

    // This is just like no-undef, but for identifier references in JSX
    // elements. Typos and mistakes could cause a ReferenceError, so the
    // severity is error. We allow globals because some applications may rely
    // on React components defined as globals by eg. UMD wrappers.
    "react/jsx-no-undef": ["error", { allowGlobals: true }],

    // This marks the "React" variable as used when there's JSX in the file.
    // This prevents no-unused-vars from marking React as unused as a false
    // positive.
    "react/jsx-uses-react": "warn",

    // This marks composite component variables as used when they are referenced
    // in a JSX element. This prevents no-unused-vars from marking those
    // variables as unused as a false positive.
    "react/jsx-uses-vars": "warn"
  }
};
