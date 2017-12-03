// Expect import/no-extraneous-dependencies, import/no-unresolved
import React from "react";

const Foo = () => <div />;

// Expect no-unused-vars
const bar = <Foo />;

// Expect no-unused-vars, react/jsx-no-undef
const qux = <FooBar />;
