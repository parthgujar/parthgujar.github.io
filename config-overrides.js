// config-overrides.js
const path = require("path");
const {
  override,
  removeModuleScopePlugin,
  babelInclude,
} = require("customize-cra");

module.exports = override(
  removeModuleScopePlugin(),

  babelInclude([
    // We want to include our actual codebase in /src
    path.resolve(path.join(__dirname, "src")),
    // We also want to include the images folder
    path.resolve(path.join(__dirname, "public/static")),
  ])
);
