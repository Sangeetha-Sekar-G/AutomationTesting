Rahulshetty
https://tcsglobal.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31110516#content



https://rahulshettyacademy.com/



https://rsteksolutions.com/placement-assistance



#Why Playwright?
Reliable End-to-End Testing-> Auto-wait capability
Cross-Browser compatibility
Multiplatform support
Multilingual Flexibility

# https://playwright.dev/docs/intro

#Advanced Features
Tracking & Debugging
Network Interception
Browser Context Management
Codegen Tool


# Node.js install
# Environmental Variable set - NODE_HOME & Path
# Editor VS code

Create Empty folder => Terminal->npm init playwright
(Create new node project)(it will create playwright project with all the dependencies)

playwright.config.js => Test runner
package.json         => must default
package-lock.json    => ignore
node_modules         => All installed jars, without this no node project

tests present in single class will run sequencially
multiple test class will run parallely

Running test(default headless mode) =>  npx playwright test 
Headed mode                         =>  npx playwright test --headed

Writing Selector:
If id is present
css -> tagname#id (or) #id

If class attribute is present
css -> tagname.class (or) .class

Write css based on any attributes
tagname[attribute='value'] (or) [attribute='value']

Write css with traversing from parent to child
css -> parentTagName >> childTagName

If needs to write the locator based on text
text=''

sudo class
tagname:has-text("textname")


only running one test class
npx playwright test tests/ExcerciseTest.spec.js

To run in debug mode
npx playwright test tests/DebugEgTest.spec.js --debug

Record and Playback run
npx playwright codegen url

trace
https://trace.playwright.dev/


npx playwright test --ui

To install exceljs:
npm install exceljs --savedev

to use specific cinfig file:
npx playwright test tests/DebugEgTest.spec.js --config playwright.config1.js
