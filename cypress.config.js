const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    localUrl:'http://localhost:3000/',
    specPattern:'cypress/e2e/main.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
