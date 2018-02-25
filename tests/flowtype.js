/* eslint-config
{
 "extends": ["../index.js", "../flowtype.js"],
 "env": { "node": true }
}
*/

// Expect warn:flowtype/require-valid-file-annotation
// @floww

// Expect warn:no-unused-vars, warn:flowtype/no-types-missing-file-annotation
type Foo = number;

// Expect warn:flowtype/no-types-missing-file-annotation
type Bar = string;

// Expect warn:flowtype/no-types-missing-file-annotation
module.exports = ("5": Bar);

// Expect warn:flowtype/no-unused-expressions
5;
