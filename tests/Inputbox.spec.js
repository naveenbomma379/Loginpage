const {test,expect} = require('@playwright/test')
const dataset = require('../Testdata/Credential.json')

test('handle inputbox',async({page})=>
{
    await page.goto('https://experiencehealthnc3.testnationsotc.com/')
    await page.locator("(//*[text()='Register'])[1]").click();
    await page.locator("//*[@id='register_MemberId']").fill(dataset.Memberid);
    await page.locator("(//*[text()='Continue'])[2]").click();

   //input - firstname
   await expect(await page.locator("//*[@id='register_firstName']")).toBeVisible();
   await expect(await page.locator("//*[@id='register_firstName']")).toBeEmpty();
   await expect(await page.locator("//*[@id='register_firstName']")).toBeEditable();
   await expect(await page.locator("//*[@id='register_firstName']")).toBeEnabled();

 

   await page.locator("//*[@id='register_firstName']").fill(dataset.Firstname);

   await expect(await page.locator("//*[@id='register_lastName']")).toBeVisible();
   await expect(await page.locator("//*[@id='register_lastName']")).toBeEmpty();
   await expect(await page.locator("//*[@id='register_lastName']")).toBeEditable();
   await expect(await page.locator("//*[@id='register_lastName']")).toBeEnabled();

   await page.locator("//*[@id='register_lastName']").fill(dataset.Lastname);

   await page.locator("//*[@id='register_dateOfBirth']").fill(dataset.DOB)

   await page.locator("//*[@id='password']").fill(dataset.Password)
   await page.locator("//*[@id='confirmPassword']").fill(dataset.Confirmpassword)
   await page.locator("(//*[@class='icon-bg-btn transition3s text-nowrap'])[3]").click();
  await page.waitForTimeout(5000);
 
   await page.locator("(//*[@type='checkbox'])[1]").click();
   await expect(await page.locator("(//*[@type='checkbox'])[1]")).toBeChecked();


//multiple ways to slect option from the dropdown
//    await page.locator("(//*[@class='form-control minimal'])[1]").selectOption({value:"17"}); //by using value
//    await page.locator("(//*[@class='form-control minimal'])[1]").selectOption('Where did you go to high school / college ?'); //by using text
// await page.selectoption("(//*[@class='form-control minimal'])[1]",'Where did you go to high school / college ?'); //by text
//    await page.locator("(//*[@class='form-control minimal'])[1]").selectOption({index: 1}); //by using index
//    await page.locator("//*[@id='register_securityAnswers0']").fill(dataset.securityans)
// //    await page.locator("(//*[@class='form-control minimal'])[2]").selectOption({value:"36"});
//    await page.locator("(//*[@class='form-control minimal'])[2]").selectOption({index:1});
//    await page.locator("//*[@id='register_securityAnswers1']").fill(dataset.securityansw)
//    await page.locator("(//*[text()='Create Account'])[1]").click();

   //assertions
   //chech number of options in dropdown 
   const options = await page.locator("(//*[@class='form-control minimal'])[1]/option");
   await expect(options).toHaveCount(10);

   await page.waitForTimeout(5000);
})