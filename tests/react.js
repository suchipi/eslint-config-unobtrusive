/* eslint-config
{
 "extends": ["../index.js", "../react.js"],
 "env": { "node": true }
}
*/

import React from "react";

const Foo = () => <div />;

// Expect warn:no-unused-vars
const bar = <Foo />;

// Expect warn:no-unused-vars, error:react/jsx-no-undef
const qux = <FooBar />;
