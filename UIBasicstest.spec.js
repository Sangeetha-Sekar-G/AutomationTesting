// import {test, expect} from "@playwright/test"

const {test, expect} = require('@playwright/test');

// js is asyn => no gurentee that will execute in sequence, so use asyn function and await keyword
// function anonymous so instead of function() just =>
// global fictures(variable) - {browser}
// context - instance

//test.only means only runs this test

 //test.use({ browserName: 'webkit'});
 test('@Web Browser Context-Validating Error login', async ({browser})=>
 {
   //fresh browser - incognito, new instance, playwright fresh browser with injected cookies...
      const context = await browser.newContext();
      const page =  await context.newPage();
      // if fresh context, above 2 line not required if we declare another ficture called 'page'-see next test
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
      //css selector
      const userName = page.locator('#username');
      const signIn = page.locator("#signInBtn");
      const cardTitles =  page.locator(".card-body a");
      page.on('request',request=> console.log(request.url()));
      page.on('response',response=> console.log(response.url(), response.status()));
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
       //when there is a event ocur, control comes here, and print all required items
    //page.on('request', request=>console.log(request.url()));
    //page.on('response', response=>console.log(response.url(), response.status()));
      //css 
     await userName.fill("rahulshetty");
     await page.locator("[type='password']").fill("learning");
     await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type - fill  
   //wipes off existing content
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
     // console.log(await page.locator(".card-body a").textContent()); //it will give 4 match
    console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(1).textContent());
    //commenting above 2 lines will not give list of values, 
    // allTextContents will not wait until page load
    // await page.waitForLoadState('networkidle'); // network will be idle //once all calls made
   // await await element.waitFor(); //use only if 1 element
   const allTitles = await cardTitles.allTextContents();
   
   console.log(allTitles);

 });
 

 test('@Web UI Controls', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    
   //dropdown - static(select)
    await dropdown.selectOption("consult");//pass value attribute

    //radio button
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    // await page.pause(); //to open playwright inspector
    console.log(await page.locator(".radiotextsty").last().isChecked());

     //assertion for radio btn
    await expect(page.locator(".radiotextsty").last()).toBeChecked();

     //checkbox
    await page.locator("#terms").click();
    await expect( page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();// to uncheck
    // no asssertion for uncheck check, but can use ischecked
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
    
    //link is blinking? blinkingText class should be there in html
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    //lets verify some text in this link, note:this link open new window check next test
 });

 
 //before clicking tell pw to wait for event of new page
 //use browser, // 3 promise - pending,rejected,fulfilled
 test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    // another context for another page
     //async=wherever some steps parallel, until the steps fulfilled, it will not go further step
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   

   const  text = await newPage.locator(".red").textContent();
   //take mail from child page and put in parent page  
   const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
   //console.log(domain);
    await page.locator("#username").fill(domain);
    // await page.pause();
    // console.log(await page.locator('#username').textContent());//grab text after it fill, but it will not print
    console.log(await page.locator("#username").inputValue());


 })



 



