const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    //specPattern: "cypress/e2e/**/*.trane.js",
   // specPattern: "**/*.feature",
    excludeSpecPattern:"",
    screenshotsFolder : "cypress/raju",
    videosFolder:"cypress/recordedvideos",
    videoCompression: 0 , //0 to 51 //32 default
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    projectId: "xmndj8",
    retries: {
      openMode:1,
      runMode:1
    },
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    watchForFileChanges: false,
    env:{

       "username": "Admin",
       "password": "admin123",
       "createemployee": "/web/index.php/api/v2/pim/employees",
       "cookievalue": "orangehrm=836e02e30fd06f789da66e0a2fbf05da"

    },
    video:false,
    experimentalSessionAndOrigin:true,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});
