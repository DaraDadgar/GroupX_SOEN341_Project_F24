import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/integration/instructor-signup.spec.js",
    baseUrl: "http://localhost:3000",
  },
});