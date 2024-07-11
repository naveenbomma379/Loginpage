import {test,expect} from '@playwright/test';
import { Registerpage } from './Registerpage'; 
import {loginpage} from './Loginpage';
   
test ('Registerflow',async({page})=>
{
const registerPage =new Registerpage(page);
await registerPage.loginUrl();
await registerPage.clickRegisterButton();
await registerPage.enterMemberId();
await registerPage.clickContinueButton();
await registerPage.enterFirstName();
await registerPage.enterLastName();
await registerPage.enterDateOfBirth();
await registerPage.enterPassword();
await registerPage.enterConfirmPassword();
await registerPage.Nextbutton();
await registerPage.clickoncheckbox();
await registerPage.selectQuestion1(1);
await registerPage.enterAnswer1();
await registerPage.selectQuestion2(2);
await registerPage.enterAnswer2();
await registerPage.clickCreateAccount();
await page.waitForTimeout(5000);

const login = new loginpage(page);
    await login.logins();
});





// const { test, expect } = require('@playwright/test');


// test('Login page', async ({ page }) => {


//   await page.goto('https://experiencehealthnc3.testnationsotc.com/');

//   const pageURL = page.url(); // Get the current URL
//   console.log('Page URL is:', pageURL);

//   await expect(page).toHaveURL('https://experiencehealthnc3.testnationsotc.com/login'); // Corrected assertion
// await page.locator("(//*[@id='loginField_memberId'])").fill("experience25");
// await page.locator("(//*[@name='loginPassword'])").fill("Nations@123");
// await page.locator("(//button[text()='Login'])[1]").click();
// await page.locator("(//*[@class='btn-close'])[3]").click();
//   await page.waitForTimeout(5000);

//   await page.close(); // await page.close()
// });

// const { test, expect } = require('@playwright/test');
// const dataset = require('../Testdata/Credential.json');

// test('Login page', async ({ page }) => {

// await page.goto(dataset.URL);

//   const pageURL = page.url(); // Get the current URL
//   console.log('Page URL is:', pageURL);

// await expect(page).toHaveURL('https://experiencehealthnc3.testnationsotc.com/login'); // Corrected assertion
// const logo = await page.locator('img[alt="LOGO"]');
// await expect(logo).toBeVisible();
// await page.locator("(//*[@id='loginField_memberId'])").fill(dataset.Memberid);
// await page.locator("(//*[@name='loginPassword'])").fill(dataset.Password);
// await page.locator("(//button[text()='Login'])[1]").click();
// await page.locator("(//*[@class='btn-close'])[3]").click();

//   await page.waitForTimeout(5000);

//   await page.close(); // await page.close()
// });


// const { test, expect } = require('@playwright/test');
// const getCredentialsFromExcel = require('../excelReader'); // Corrected import path

// // Use the correct file path here
// test('Login page', async ({ page }) => {
//     const dataset = await getCredentialsFromExcel("C:\Users\NaveenBomma\OneDrive - NationsBenefits\Documents\excel-data-providers.xlsb");
//     console.log('Page:::::::',dataset);
//     await page.goto(dataset.URL);

//   const pageURL = page.url(); // Get the current URL
//   console.log('Page URL is:', pageURL);

//   await expect(page).toHaveURL(dataset.URL); // Corrected assertion

//   await page.locator("#loginField_memberId").fill(dataset.memberId); // Fill with memberId from dataset
//   await page.locator("[name='loginPassword']").fill(dataset.password); // Fill with password from dataset
//   await page.locator("//button[text()='Login']").first().click(); // Click the login button
//   await page.locator(".btn-close").nth(2).click(); // Click the close button

//   await page.waitForTimeout(5000); // Wait for 5 seconds

//   await page.close(); // Close the page
// });

