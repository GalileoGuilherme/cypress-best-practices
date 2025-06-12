const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "82p36w",
  e2e: {
    baseUrl: 'https://automationexercise.com',
    supportFile: 'cypress/support/e2e.js'
  },
})
