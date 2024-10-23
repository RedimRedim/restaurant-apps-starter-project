import { defineConfig } from "eslint-define-config";
import globals from "globals";
import pluginJs from "@eslint/js";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        beforeEach: "readonly",
        Feature: "readonly",
        Scenario: "readonly",
        locate: "readonly",
        actor: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      // Add your custom rules here
    },
  },
  pluginJs.configs.recommended,
]);
