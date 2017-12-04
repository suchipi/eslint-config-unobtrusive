// Expect error:for-direction
for (let i = 0; i > 10; i++) {
  console.log(i);
}

// Expect warn:no-unused-vars
const foo = {
  // Expect warn:getter-return
  get foo() {}
};

// Expect warn:no-unused-vars
async function bla(someArray) {
  for (let element of someArray) {
    await element.get();
  }
}

// Expect error:no-undef
if (something === -0) {
  console.log("aaa");
}

let cond, assign;
// Expect warn:no-cond-assign
if (cond = assign) {
  console.log(cond);
}

let cond, assign;
if ((cond = assign)) { // okay with parens
  console.log(cond);
}

console.log("abcdefg");

// Expect warn:no-constant-condition
if (true) {
  console.log("it was true!");
}

// Expect warn:no-unused-vars
const controlRegexp = /\x1f/;

debugger;

// Can't test no-dupe-args because it's a SyntaxError when the parser goes
// through the file :(
// function foo(_, _, three) {
//   console.log(three);
// }

// Expect warn:no-unused-vars
const someObjectWithDupeKeys = {
  dupeKey: true,
  // Expect warn:no-dupe-keys
  dupeKey: false
};

// Expect error:no-undef
switch (somethingVeryCool) {
  case 1: console.log(1);
  // Expect warn:no-duplicate-case
  case 1: console.log("1 again");
}

// Expect warn:no-empty
{}

// Expect warn:no-unused-vars, warn:no-empty-character-class
const emptyCharacterClass = /a[]/g;

// Expect warn:no-empty
try {} catch(err) {
  err = 5;
}

if (Boolean(5)) {
  console.log("5 is *so* boolean right now");
}

// Expect warn:no-unused-vars
function funcAssign() { console.log("funcAssign"); }
funcAssign = 5;

// Expect warn:no-constant-condition
if (true) {
  // Expect warn:no-unused-vars
  var innerDeclaration = 5;
}

// Can't test no-invalid-regexp because it's a SyntaxError
