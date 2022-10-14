const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "http://app:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
