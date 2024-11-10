// cypress.config.js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Update to match your local server URL
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
