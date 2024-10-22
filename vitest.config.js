import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Use JSDOM for DOM testing
    include: ["**/__tests__/*.{test,spec}.{js,mjs,cjs}"], // Adjust this as needed
    setupFiles: ["fake-indexeddb/auto"],
  },
});
