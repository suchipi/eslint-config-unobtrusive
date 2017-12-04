// Expect warn:flowtype/require-valid-file-annotation
// @floww

// Expect warn:no-unused-vars
type Foo = number;

type Bar = string;

module.exports = ("5": Bar);
