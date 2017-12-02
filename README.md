# eslint-config-unobtrusive

## Problem

ESLint is a great tool, but people too often abuse it.

Although a linter can be a helpful companion when you are new to a language, it can get in the way once you are more familiar with the language.

Even worse, misguided linter rules can teach a user to fear patterns which aren't problematic in practice.

I got tired of ESLint configs that included annoying rules that would yell at me even though the code would work just fine as written.

I wanted an ESLint config that would stay silent most of the time, but when it spoke up, it would be helpful rather than annoying. Thus, `unobtrusive` was born.

## Goals

`unobtrusive` was made with the following goals in mind:

* Stay out of the user's way, but still offer help.
* Don't flag anything based on arbitrary consistency, stylistic choices, or premature optimization.
* Help the user find unfinished or unused code while they type.
* Help the user find typos and mistakes.
* Only flag something with severity "error" if it would cause a runtime error. Otherwise, "warn" should be used.
* Only flag something if ESLint has a high level of confidence that the code contains a mistake, problem, is unused, or the result of incomplete refactoring. Err on the side of not flagging rather than creating false positives.
* Ideally, the user should never have to use `eslint-disable` comments.

## Assumptions

This config assumes the following:

* You are using ECMAScript modules in your codebase.
* Since you are using modules, your code is implcitly in strict mode.
* You aren't using nonstandard globals very often, but when you do, you define them in your eslint config.
* You'll define `env` in your eslint config yourself.

## Rationale

These are the criteria I used to decide which rules to include:

* Disable all formatting rules (such as [`indent`](https://eslint.org/docs/rules/indent)).
  * ESLint can't standardize code style perfectly; lots of variations can still slip through the cracks. Use a code formatter (like [prettier](https://prettier.io/)) or style guide (like [standard](https://standardjs.com/)) instead.
* Disable rules that require the user to change their code where doing so will not result in a change in runtime behavior (such as [`yoda`](https://eslint.org/docs/rules/yoda), [`curly`](https://eslint.org/docs/rules/curly), and [`dot-notation`](https://eslint.org/docs/rules/dot-notation)).
  * These rules often seek to make things consistent for the sake of consistency alone, which is a waste of the user's time.
  * This rule can be broken if the user was likely to make this change themselves because the code was leftover or unused as a result of refactoring.
* Disable rules that enforce "best practices" which may be subjective or not always apply (such as [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq) and [`class-methods-use-this`](http://eslint.org/docs/rules/class-methods-use-this)).
  * These rules, while presumably well-intentioned, are often not a suitable stand-in for a user's judgement on a case-by-case basis. In situations where the "best practice" being enforced is something the developer has considered and is choosing not to do, these rules flagging the user's code can be very annoying and undermine the user's relationship with the linter (or the person who configured the linter).
* Disable rules that get in the way while debugging, such as [`no-console`](https://eslint.org/docs/rules/no-console).
  * The linter yelling at the user every time they debug code is very annoying, and creates an unnecessary negative association with debugging code.
  * Also, some users prefer to leave `console.log`s in their codebase.
  * Even though these rules are annoying while debugging, they can still be useful to prevent committing unintended debugging statements into the codebase. I chose to opt for a better editor experience here, but if you want to use these rules for that purpose, you can configure eslint to use a different config in the editor than in a git pre-commit hook or CI run.
* Enable rules that help find typos and point out incomplete code, such as [`no-undef`](https://eslint.org/docs/rules/no-undef).
  * When writing code, it's nice to be able to rely on the linter to show which spots you haven't addressed yet, because when you're done writing, the linter messages should go away. The linter helps you keep track of what still needs to be done, so if you forget something or lose your place, the linter can often give you a hint.
* Enable rules that help find unused or leftover code, such as [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions).
  * When you are refactoring code, it's nice to rely on the linter to point out which parts are no longer used or need to be updated. The linter will help you keep track of things that don't line up right yet, and when you're done refactoring, the linter messages should go away.

Also, in the config itself (`index.js`), each rule has a comment above it explaining my thought process behind turning it either on or off. I have included every eslint rule in the config, even if I am setting it to the default value, so that you can understand the reasoning behind the decision.

## Installation

1. Install the package

   ```
   $ npm install eslint-config-unobtrusive
   ```

2. Add it to your eslint config:

   `.eslintrc`

   ```json
   {
     "extends": "unobtrusive",
     "env": {
       "browser": true
     }
   }
   ```

3. That's it!

### Note: Globals

The [`env`](https://eslint.org/docs/user-guide/configuring#specifying-environments) config option is required, because eslint-config-unobtrusive includes the [`no-undef`](https://eslint.org/docs/rules/no-undef) rule, which warns you when you access a variable that is not defined. In order to know which variables are defined, ESLint looks for variable declarations in the same file and also references a list of known globals. The [`env`](https://eslint.org/docs/user-guide/configuring#specifying-environments) config option is used to configure the list of known globals in your environment.

You can also use the [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals) option to add additional names to the list of known globals:

```json
{
  "extends": "unobtrusive",
  "env": {
    "browser": true
  },
  "globals": {
    "jQuery": false,
    "selectedColor": true
  }
}
```

The key/value pairs of the [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals) option refer to the name of the global and whether it is writable (so `false` indicates that the global is read-only).

## Extras

`unobtrusive` also comes with some extra configs that you can add to get additional functionality. They follow the same philosophy as `unobtrusive`, but aren't enabled by default because they might not work out-of-the-box for every user.

### `unobtrusive/import`

This extra config depends on `eslint-plugin-import` and adds rules that warn you when attempting to import or require things that don't exist. It's not included in the base `unobtrusive` config because it would flag false positives for users relying on custom import resolution mechanics, like webpack loaders or `NODE_PATH`.

#### Installation/Usage

1. Install `unobtrusive` first
2. Install `eslint-plugin-import`

   ```
   $ npm install eslint-plugin-import
   ```

3. Add `unobtrusive/import` to your eslint config:

   `.eslintrc`

   ```json
   {
     "extends": ["unobtrusive", "unobtrusive/import"],
     "env": {
       "browser": true
     }
   }
   ```

4. That's it!

### `unobtrusive/react`

This extra config depends on `eslint-plugin-react` and adds React-specific rules that are in line with the `unobtrusive` philosophy. It also configures `eslint` so that it can parse JSX properly, and fixes some JSX-related false positives and false negatives with `no-unused-vars` and `no-undef`. It's not included in the base `unobtrusive` config because not all users use React.

#### Installation/Usage

1. Install `unobtrusive` first
2. Install `eslint-plugin-react`

   ```
   $ npm install eslint-plugin-react
   ```

3. Add `unobtrusive/react` to your eslint config:

   `.eslintrc`

   ```json
   {
     "extends": ["unobtrusive", "unobtrusive/react"],
     "env": {
       "browser": true
     }
   }
   ```

4. That's it!

### `unobtrusive/flowtype`

This extra config depends on `eslint-plugin-flowtype` and `babel-eslint` and adds flow-specific rules that are in line with the `unobtrusive` philosophy. It also configures `eslint` so that it can parse flow types properly, and fixes some type-related false positives and false negatives with `no-unused-vars` and `no-undef`. It's not included in the base `unobtrusive` config because not all users use flow.

#### Installation/Usage

1. Install `unobtrusive` first
2. Install `eslint-plugin-flowtype` and `babel-eslint`

   ```
   $ npm install eslint-plugin-flowtype babel-eslint
   ```

3. Add `unobtrusive/flowtype` to your eslint config:

   `.eslintrc`

   ```json
   {
     "extends": ["unobtrusive", "unobtrusive/flowtype"],
     "env": {
       "browser": true
     }
   }
   ```

4. That's it!

<!-- prettier-ignore -->
> NOTE: To use `unobtrusive`, `unobtrusive/import`, `unobtrusive/react`, and `unobtrusive/flowtype` together, your eslint config would look like this:
>```json
>{
>  "extends": [
>    "unobtrusive",
>    "unobtrusive/import",
>    "unobtrusive/react",
>    "unobtrusive/flowtype"
>  ],
>  "env": {
>    "browser": true
>  }
>}
>```
