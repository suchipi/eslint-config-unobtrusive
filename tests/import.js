/* eslint-config
{
 "extends": ["../index.js", "../import.js"],
 "env": { "node": true }
}
*/

// Expect warn:import/no-extraneous-dependencies, error:import/no-unresolved
import React from "react";

React.go();

// Expect error:import/named
import { notThere } from "../fixtures/hasESDefaultExport";
notThere();

// Expect error:import/default
import noDefault from "../fixtures/hasNamedESExport";

noDefault();
