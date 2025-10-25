   const {test,expect} = require('@playwright/test')

//test.describe.configure({mode:'parallel'}); 
//test.describe.configure({mode:'serial'}); //for inter dependent case, if one fails next will be skipped

test("@Web Popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
   // await page.pause();
   
   //popup check/dialogue check
    //wait for event, whenever this even occure this line will take care
    page.on('dialog',dialog => dialog.accept());
    
    // page.on('dialog', dialog => dialog.dismiss());

    await page.locator("#confirmbtn").click();

    //Hover and click option
    await page.locator("#mousehover").hover();

    //iframe, frameset tags should be there
    const framesPage = page.frameLocator("#courses-iframe");
    //if 2 match, one is visible and another is not, then click on visible one,can use :visible
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
     const textCheck =await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


})

test("Screenshot & Visual comparision",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
     //only element ss
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
     //whole page ss
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
});
//screenshot -store -> screenshot -> 
test('Visual',async({page})=>
{
    //make payment -when you 0 balance
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})





