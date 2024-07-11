const{test,expect} = require('@playwright/test')

test('ass',async ({page})=>
{
  
    await page.goto('https://experiencehealthnc3.testnationsotc.com/');
      //hard assertions
    // await expect(page).toHaveURL('https://experiencehealthnc3.testnationsotc.com/')
    // await expect(page.locator("img[alt='Logo']")).toBeVisible();

    //soft Assertions

    await expect.soft(page).toHaveURL("https://experiencehealthnc3.testnationsotc.com/log");
    await expect.soft(page.locator("img[alt='Logo']")).toBeVisible();
} )