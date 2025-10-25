// @ts-check
const { devices } = require('@playwright/test');

const config = {// variable holding all info required to run test
  testDir: './tests',//what test to run //project level so all files
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000, //global // default timeout 30s
  expect: {
  
    timeout: 5000 //specifically for expect 5s
  },
  
  reporter: 'html',//for getting reporting after test run
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : true, // it opens browser if true
    screenshot : 'on',
    trace : 'on',//off,on// all trace success, failure evrything
  
    
  },


};

module.exports = config;// so it is available across project
