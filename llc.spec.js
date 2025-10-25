import { test, expect } from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //if there is no association label will not work
   //in that case you can see placeholder 
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
     // chain 
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 //only one button no need of specify name
    //locator(css)

});


