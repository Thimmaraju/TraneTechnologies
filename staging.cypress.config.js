const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: {
      openMode:4,
      runMode:1
    },
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    watchForFileChanges: false,
    env:{

       "username": "ewyufhwei",
       "password": "oghjg"

    },
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
