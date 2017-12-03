// The eslint configuration for files within this project.
module.exports = {
  extends: ["./index.js", "./react.js", "./flowtype.js", "./import.js"],
  env: { node: true, jest: true }
};
