const {test, expect} = require('@playwright/test');


test('Extranet Policy Cancellation - Search by Contract No', async({page}) =>
{

  await page.goto('https://extranet-staging.europ-assistance.com/front_v6/Extranet_wd.html#ExtranetLogin:');
  
  await page.locator('input[type="text"]').fill('admin');
  await page.locator('input[type="password"]').fill('admin');
  await page.getByText('OK').click();
  
  await page.locator('div').filter({ hasText: 'OK' }).nth(5).click();

  await page.getByRole('cell', { name: 'Contract No.' }).getByRole('textbox').fill('3101497592');
  await page.getByText('Reset').click();
  await page.getByText('Search', { exact: true }).click();

  await page.locator("[src='Image/cancel.png']").click();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Businnes Requested to Cancel');
  await page.getByText('Validate', { exact: true }).click();
  await page.getByText('Yes').click();
  
  
});