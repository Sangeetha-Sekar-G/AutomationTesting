// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :1,  //  if test fails, enable retry tests
  workers: 3, // test runs parallel , default 5
  // test in same file runs sequencially, tests in whole project runs parellaly
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [ // to have multiple option to run
    {
      name : 'safari',
      use: {

        browserName : 'webkit',
        headless : true,
        screenshot : 'off',
        trace : 'on',//off,on 
        ...devices['iPhone 11'],   //to specify which device mode to run 
      }

    },
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        video: 'retain-on-failure',  // to record video
        ignoreHttpsErrors:true, // to bypass ssl cert error
        permissions:['geolocation'], // to bypass location allow
        
        trace : 'on',//off,on
       // ...devices['']
     //   viewport : {width:720,height:720} // to run in specific browser size mode
         }

    }
    ]

};

module.exports = config;
