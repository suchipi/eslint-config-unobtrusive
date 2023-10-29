/* eslint-config
{
 "extends": ["../index.js"],
 "env": { "node": true }
}
*/

// Test: for-direction
// Expect error:for-direction
for (let i = 0; i > 10; i++) {
  console.log(i);
}

// Test: getter-return
// Expect warn:no-unused-vars
const somethingWithAGetter = {
  // Expect warn:getter-return
  get foo() {},
};

// Test: no-await-in-loop
// Expect warn:no-unused-vars
async function bla(someArray) {
  for (let element of someArray) {
    await element.get();
  }
}

// Test: no-compare-neg-zero
// Expect error:no-undef
if (something === -0) {
  console.log("aaa");
}

// Test: no-cond-assign
let cond, assign;
// Expect warn:no-cond-assign
if ((cond = assign)) {
  console.log(cond);
}

if ((cond = assign)) {
  // okay with parens
  console.log(cond);
}

// Test: no-console
console.log("abcdefg");

// Test: no-constant-condition
// Expect warn:no-constant-condition
if (true) {
  console.log("it was true!");
}

// Test: no-control-regex
// Expect warn:no-unused-vars
const controlRegexp = /\x1f/;

// Test: no-debugger
debugger;

// Skipped: no-dupe-args (parser throws a SyntaxError)

// Test: no-dupe-keys
// Expect warn:no-unused-vars
const someObjectWithDupeKeys = {
  dupeKey: true,
  // Expect warn:no-dupe-keys
  dupeKey: false,
};

// Test: no-duplicate-case
// Expect error:no-undef
switch (somethingVeryCool) {
  case 1:
    console.log(1);
  // Expect warn:no-duplicate-case
  case 1:
    console.log("1 again");
}

// Test: no-empty
// Expect warn:no-empty
{
}

// Test: no-empty-character-class
// Expect warn:no-unused-vars, warn:no-empty-character-class
const emptyCharacterClass = /a[]/g;

// Test: no-ex-assign
// Expect warn:no-empty
try {
} catch (err) {
  err = 5;
}

// Test: no-extra-boolean-cast
if (Boolean(5)) {
  console.log("5 is *so* boolean right now");
}

// Skipped: no-extra-parens
// Skipped: no-extra-semi

// Test: no-func-assign
// Expect warn:no-unused-vars
function funcAssign() {
  console.log("funcAssign");
}
funcAssign = 5;

// Test: no-inner-declarations
// Expect warn:no-constant-condition
if (true) {
  // Expect warn:no-unused-vars
  var innerDeclaration = 5;
}

// Skipped: no-invalid-regexp (SyntaxError on parse)

// Test: no-irregular-whitespace
// There is a non-breaking space on the line below. It should be preserved.
// Test: no-obj-calls
// Expect error:no-obj-calls
Math();

// Expect error:no-obj-calls
JSON();

/* global Reflect */
// Expect error:no-obj-calls
Reflect();

// Test: no-prototype-builtins
const someObject = {};
console.log(someObject.hasOwnProperty("bar"));

// Test: no-regex-spaces
const thisIsGood = /foo {3}bar/;
const thisIsGoodToo = /foo   bar/;
console.log(thisIsGood, thisIsGoodToo);

// Test: no-sparse-arrays
const sparseArray = [, , ,];
console.log(sparseArray);

// Test: no-template-curly-in-string
const templateInString = "${foo}";
console.log(templateInString);

// Test: no-unexpected-multiline
// Expect error:no-undef
weirdAsi[1].forEach();

// Test: no-unreachable
(function () {
  return 3;
  // Expect warn:no-unreachable
  return 4;
})();

// Test: no-unsafe-finally
(function () {
  try {
    // Expect error:no-undef
    maybeDie();
    return 3;
  } catch (err) {
    // nothing
  } finally {
    return 5;
  }
})();

// Test: no-unsafe-negation
// Expect error:no-undef
if (!key in object) {
  // bla
}

// Test: use-isnan
console.log(NaN === NaN);

// Test: valid-jsdoc
console.log(/**number*/ (n) => n * 2);

// Test: valid-typeof
// Expect warn:valid-typeof
console.log(typeof 4 === "undefimed");

const sometype = "foo";
console.log(typeof 4 === sometype);

// Test: accessor-pairs
console.log({
  set foo(val) {},
});

// Test: array-callback-return
console.log(
  [].map(() => {}),
  // Expect error:no-undef
  timer.every(() => {}), // Incorrectly thinks this is an array callback
);

// Test: block-scoped-var
(function () {
  if (foo) {
    var bla = true;
  }

  return bla;
})();

// Test: class-methods-use-this
// Expect warn:no-unused-vars
class ClassWithMethodsThatDontUseThis {
  getConfig() {
    return { foo: "foo" };
  }
}

// Skipped: complexity

// Test: consistent-return
// Expect warn:no-unused-vars
function maybeReturnsUndefined() {
  if (console instanceof global.Console) {
    return 4;
  }
}

// Skipped: curly

// Test: default-case
switch (4) {
  case 4: {
    console.log(4);
  }

  // no default
}

// Skipped: dot-location
// Skipped: dot-notication

// Test: eqeqeq
console.log("4" == 4);

// Test: guard-for-in
for (let propertyName in {}) {
  console.log(propertyName);
}

// Test: no-alert
/* global alert, confirm, prompt */
alert("Hi");
confirm("Are you sure about that");
prompt("Process completed");

// Test: no-caller
(function () {
  "use strict";
  // Expect error:no-caller
  return arguments.caller;
})();

// Test: no-case-declarations
switch (foo) {
  case 1:
    // Expect warn:no-unused-vars
    let thisIsScopedToTheWholeSwitch = 1;
    break;
  case 2:
    // Expect warn:no-unused-vars
    const thisIsToo = 2;
    break;
}

// Test: no-div-regex
console.log(/=foo/);

// Test: no-else-return
function foo() {
  const someBool = true;
  if (someBool) {
    return 4;
  } else {
    return 5;
  }
}

// Test: no-empty-function
const noop = () => {};
console.log(noop);

// Skipped: no-empty-pattern

// Test: no-eq-null
if (global.something == null) {
  console.log("hi");
}

// Test: no-eval
eval("console.log('hi');");

// Test: no-extend-native
Object.prototype.isAwesome = () => "maybe";

// Test: no-extra-bind
console.log(
  function () {
    return 5;
  }.bind({ foo: 4 }),
);

// Test: no-extra-label
A: while (false) {
  // Expect warn:no-extra-label
  break A;
}

// Test: no-fallthrough
switch (5) {
  case 1:
  case 2:
  case 3: {
    console.log("fall-through");
  }
}

// Skipped: no-floating-decimal

// Test: no-global-assign
// Expect warn:no-unused-vars
/* global history */
// Expect warn:no-global-assign
history = 5;

// Test: no-implicit-coercion
console.log(!!"");

// Skipped: no-implicit-globals (Not testable because this
// file is module context, not script)

// Test: no-implied-eval
setTimeout("alert('Hi!');", 100);

// Test: no-invalid-this
// Expect warn:no-unused-vars
function gimmeAThis() {
  return this.theThing;
}

// Test: no-iterator
const IteratorThing = function () {};
IteratorThing.prototype.__iterator__ = function () {
  // Expect error:no-undef
  return new Iterator(this);
};

// Test: no-labels
label: {
  break label;
}

// Test: no-lone-blocks
{
  // here it is
}

// Test: no-loop-func
const funcs = {};
for (var i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i;
  };
}

// Test: no-magic-numbers
var data = ["foo", "bar", "baz"];
console.log(data[2]);

// Skipped: no-muli-spaces
// Skipped: no-multi-str

// Test: no-new
// Expect error:no-undef
new Thing();

// Test: no-new-func
new Function("console.log('hi');")();

// Test: no-new-wrappers
console.log(new String("a"), new Boolean(false), new Number(33));

// Skipped: no-octal (SyntaxError)
// Skipped: no-octal-escape (SyntaxError)

// Test: no-param-reassign
(function (bar) {
  bar = 4;
})();

// Test: no-proto
const protoman = {};
protoman.__proto__ = function () {};

// Test: no-redeclare
// Expect warn:no-unused-vars
var redeclared = 3;
var redeclared = 10;

// Skipped: no-restricted-properties

// Test: no-return-assign
(function () {
  return (this.woo = 3);
})();

// Test: no-return-await
(async function () {
  /* global Promise */
  return await Promise.resolve(3);
})();

// Test: no-script-url
/* global location */
location.href = "javascript:void(0)";

// Test: no-self-assign
(function () {
  // Expect warn:no-unused-vars
  var foo;
  // Expect warn:no-self-assign
  foo = foo;
})();

// Test: no-self-compare
(function isNaN(thing) {
  return !(thing === thing);
})(NaN);

// Test: no-sequences
console.log((() => console.log("ran"), 5));

// Test: no-throw-literal
(function () {
  throw 42;
})();

// Test: no-unmodified-loop-condition
var shouldContinue = true;
// Expect warn:no-unmodified-loop-condition
while (shouldContinue) {
  // Don't change shouldContinue
}

// Test: no-unused-expressions
var fortyTwo = 42;
// Expect warn:no-unused-expressions
fortyTwo;
// allowShortCircuit option
fortyTwo && console.log("yup 42 is truthy");
// allowTernary option
fortyTwo ? console.log("mhm") : console.log("nope");
// allowTaggedTemplates option
fortyTwo`mhm`;

// Test: no-unused-labels
// Expect warn:no-unused-labels
something: {
  // this is something
}

// Test: no-useless-call
function callMeMaybe() {
  return this;
}
callMeMaybe.call(undefined, 1, 2, 3);
callMeMaybe.apply(undefined, [1, 2, 3]);
callMeMaybe.call(null, 1, 2, 3);
callMeMaybe.apply(null, [1, 2, 3]);

// Test: no-useless-concat
console.log("a" + "b");

// Test: no-useless-escape
console.log(/\a\b\c\d\e/);

// Test: no-useless-return
(function () {
  return;
})();

// Test: no-void
console.log(void 0);

// Test: no-warning-comments
// TODO: this is a warning comment

// Skipped: no-with (SyntaxError in strict mode)

// Test: prefer-promise-reject-errors
Promise.reject(5);

// Test: radix
parseInt("10");

// Test: require-await
// Expect warn:no-unused-vars
async function doSomething() {
  // Actually we already did
  return "something";
}

// Test: vars-on-top
// Expect warn:no-unused-vars
function timeToLoop() {
  for (var i = 0; i < 10; i++) {
    /* empty */
  }
}

// Skipped: wrap-iife

// Test: yoda
const fortyThree = 43;

if (43 === fortyThree) {
  console.log("yoda is okay");
} else if (fortyThree === 43) {
  console.log("not yoda is okay too");
}

// Skipped: strict (module context, so strict is implicit)

// Test: init-declarations
var assignedAtDeclaration = 1;
var assignedLater;
assignedLater = 2;

console.log(assignedAtDeclaration, assignedLater);

// Test: no-catch-shadow
// Expect warn:no-unused-vars
var err;
try {
  // something
} catch (err) {
  // overwrites err in IE8 instead of shadowing
}

// Skipped: no-delete-var (SyntaxError)

// Test: no-label-var
// Expect warn:no-unused-vars
var notACollision = 4;
// Expect warn:no-unused-labels
notACollision: {
  // empty
}

// Skipped: no-restricted-globals

// Test: no-shadow
// Expect warn:no-unused-vars
var shadowThis = 3;
(function () {
  // Expect warn:no-unused-vars
  var shadowThis = 10;
})();

// Test: no-shadow-restricted-names
var undefined = 6;

// Test: no-undef
// Expect error:no-undef
console.log(whatIWantThatIReallyReallyWant);

// Test: no-undef-init
// Expect warn:no-unused-vars
let thisAintDefined = undefined;

// Test: no-unused-vars
// Expect warn:no-unused-vars
const haventUsedThisOneYet = 6;

// Test: no-use-before-defined
console.log(beforeDefined); // undefined
var beforeDefined = 42;

// Test: no-callback-return
function processRequest(err, callback) {
  if (err) {
    callback(err);
  }
  callback();
}
processRequest(null, () => {});

// Skipped: global-require

// Test: handle-callback-err
// Expect warn:no-unused-vars
function loadData(err, data) {
  // forgot to handle error
}

// Test: no-buffer-constructor
console.log(new Buffer(10));

// Skipped: no-mixed-requires
// Skipped: no-new-require

// Test: no-path-concat
console.log("the file is " + __filename);

// Test: no-process-env
console.log(process.env.NODE_ENV === "production");

// Test: no-process-exit
process.exit(0);

// Skipped: no-restricted-modules

// Test: no-sync
const fs = require("fs");
fs.existsSync("foo");

// Skipped: array-bracket-newline
// Skipped: array-bracket-spacing
// Skipped: array-element-newline
// Skipped: block-spacing
// Skipped: brace-style
// Skipped: camelcase
// Skipped: capitalized-comments
// Skipped: comma-dangle
// Skipped: comma-spacing
// Skipped: comma-style
// Skipped: computed-property-spacing
// Skipped: consistent-this
// Skipped: eol-last
// Skipped: func-call-spacing
// Skipped: func-name-matching
// Skipped: func-names
// Skipped: func-style
// Skipped: function-paren-newline
// Skipped: id-blacklist
// Skipped: id-length
// Skipped: id-match
// Skipped: indent
// Skipped: jsx-quotes
// Skipped: key-spacing
// Skipped: keyword-spacing
// Skipped: line-comment-position
// Skipped: linebreak-style
// Skipped: lines-around-comment
// Skipped: lines-between-class-members
// Skipped: max-depth
// Skipped: max-len
// Skipped: max-lines
// Skipped: max-nested-callbacks
// Skipped: max-params
// Skipped: max-statements
// Skipped: max-statements-per-line
// Skipped: multiline-comment-style
// Skipped: multiline-ternary
// Skipped: new-cap
// Skipped: new-parens
// Skipped: newline-per-chained-call
// Skipped: no-array-constructor
// Skipped: no-bitwise
// Skipped: no-continue
// Skipped: no-inline-comments
// Skipped: no-lonely-if
// Skipped: no-mixed-operators
// Skipped: no-mixed-spaces-and-tabs
// Skipped: no-multi-assign
// Skipped: no-multiple-empty-lines
// Skipped: no-negated-condition
// Skipped: no-nested-ternary
// Skipped: no-new-object
// Skipped: no-plusplus
// Skipped: no-restricted-syntax
// Skipped: no-tabs
// Skipped: no-ternary
// Skipped: no-trailing-spaces
// Skipped: no-underscore-dangle
// Skipped: no-unneeded-ternary
// Skipped: no-whitespace-before-property
// Skipped: nonblock-statement-body-position
// Skipped: object-curly-newline
// Skipped: object-curly-spacing
// Skipped: object-property-newline
// Skipped: one-var
// Skipped: one-var-declaration-per-line
// Skipped: operator-assignment
// Skipped: operator-linebreak
// Skipped: padded-blocks
// Skipped: padding-line-between-statements
// Skipped: quote-props
// Skipped: quotes
// Skipped: require-jsdoc
// Skipped: semi
// Skipped: semi-spacing
// Skipped: semi-style
// Skipped: sort-keys
// Skipped: sort-vars
// Skipped: space-before-blocks
// Skipped: space-before-function-paren
// Skipped: space-in-parens
// Skipped: space-infix-ops
// Skipped: space-unary-ops
// Skipped: spaced-comment
// Skipped: switch-colon-spacing
// Skipped: template-tag-spacing
// Skipped: unicode-bom
// Skipped: wrap-regex

// Skipped: arrow-body-style
// Skipped: arrow-parens
// Skipped: arrow-spacing

// Test: constructor-super
// Expect warn:no-unused-vars
class SuperInUnderived {
  constructor() {
    // Expect error:constructor-super
    super(); // SyntaxError
  }
}

// Expect warn:no-unused-vars, error:no-undef
class DerivedWithoutSuper extends Parent {
  // Expect error:constructor-super
  constructor() {} // ReferenceError
}

// Expect warn:no-unused-vars
class ExtendsNonClass extends null {
  // Expect warn:no-useless-constructor
  constructor() {
    // Expect error:constructor-super
    super(); // TypeError
  }
}

// Skipped: generator-star-spacing

// Test: no-class-assign
// Expect warn:no-unused-vars
class GetsReassigned {}
GetsReassigned = 5;

// Test: no-confusing-arrow
console.log(() => 4 <= 5);

// Test: no-const-assign
// Expect warn:no-unused-vars
const constReassign = 5;
// Expect error:no-const-assign
constReassign = 6;

// Test: no-dupe-class-members
// Expect warn:no-unused-vars
class HasDupes {
  name() {}
  // Expect warn:no-dupe-class-members
  name() {}
}

// Test: no-duplicate-imports
// Expect warn:no-unused-vars
import runtimeStuff from "./nowhere";
// Expect warn:no-unused-vars
import { SomeType } from "./nowhere";

// Test: no-new-symbol
/* global Symbol */
// Expect error:no-new-symbol
new Symbol();

// Skipped: no-restricted-imports

// Test: no-this-before-super
// Expect warn:no-unused-vars, error:no-undef
class TryingToBeSneaky extends SomethingElse {
  constructor() {
    // Expect error:no-this-before-super
    this.foo = 5;
    super();
  }
}

// Skipped: no-useless-computed-key

// Test: no-useless-constructor
// Expect warn:no-unused-vars, error:no-undef
class Pointless extends Something {
  // Expect warn:no-useless-constructor
  constructor() {
    super();
  }
}

// Test: no-useless-rename
// Expect warn:no-unused-vars
import { uselessRename as uselessRename } from "./nowhere";

// Test: no-var
// Expect warn:no-unused-vars
var thisIsAVar = 5;

// Skipped: object-shorthand
// Skipped: prefer-arrow-callback
// Skipped: prefer-const
// Skipped: prefer-destructuring
// Skipped: prefer-numeric-literals
// Skipped: prefer-rest-params
// Skipped: prefer-spread
// Skipped: prefer-template

// Test: require-yield
// Expect warn:no-unused-vars
function* someGen() {
  return 5;
}

// Skipped: rest-spread-spacing
// Skipped: sort-imports

// Test: symbol-description
console.log(Symbol());

// Skipped: template-curly-spacing
// Skipped: yield-star-spacing
