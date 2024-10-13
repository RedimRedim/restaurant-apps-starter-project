import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Keep browser globals
        ...globals.node, // Add Node.js globals if needed
      },
      parserOptions: {
        ecmaVersion: 2020, // Specify the ECMAScript version
        sourceType: "module", // Use "module" for ES modules
      },
    },
  },
  pluginJs.configs.recommended,
];
