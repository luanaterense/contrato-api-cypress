const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4isatm',
  e2e: {
    baseUrl: 'https://covid19-brazil-api.now.sh/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
