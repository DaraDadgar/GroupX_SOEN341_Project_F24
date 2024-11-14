const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/integration/Tests.cy.js",
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
});
