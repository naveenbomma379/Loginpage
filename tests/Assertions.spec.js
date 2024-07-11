const {test,expect} = require ('@playwright/test')

test('assertions',async({page})=>
    {
await page.goto('https://experiencehealthnc3.testnationsotc.com/');
await page.waitForTimeout(5000);
//1)expect(page).tohaveURL()
await expect(page).toHaveURL('https://experiencehealthnc3.testnationsotc.com/login');
//2) expect(page).tohavetitle()
await expect(page).toHaveTitle('NationsBenefits');
//3)expect(locator).tobevisible()
const logoElement = await page.locator('img[alt="LOGO"]')
await expect(logoElement).toBeVisible();
const searchbox = await page.locator("//*[@id='loginField_memberId']");
await expect(searchbox).toBeEnabled();
await page.locator("(//*[@id='loginField_memberId'])").fill('Experience25');
await page.locator("(//*[@name='loginPassword'])").fill('Nations@123');
await page.locator("(//button[text()='Login'])[1]").click();
await page.locator("(//button[@class='btn-close'])[7]").click();
await page.waitForTimeout(3000);
await page.locator("(//*[@class='category-show dropdown-toggle'])").click();
await page.waitForTimeout(3000);
await page.locator("//*[contains(text(),'All Products')]").click();
//check box
const checkbox = page.locator("(//*[text()='Bathroom Safety & Fall Prevention'])[2]");
await expect(checkbox).toBeVisible({ timeout: 10000 });  // Increase timeout if necessary
await checkbox.click();
await expect(checkbox).toBeChecked();

// expect(locator).tohaveText()
const text = await page.locator("(//*[@class='m-0'])[2]")
await expect(text).toHaveText('This Portal is the exclusive way  to order products online with your benefit dollars.');//full text
//expect .tocontaiontext()
const text1 = await page.locator("(//*[@class='m-0'])[2]")
await expect(text1).toContainText('products online with your benefit dollars.'); // partial text

//expect (locator).tohavevalue input hasa value

const searchinput = await page.locator("//*[@name='Search']");
await searchinput.fill('cold');
await expect(searchinput).toHaveValue('cold');
//expect(locator).tohavecount()  list of elements have given length
//const options = await page.locator('ffv')
////*[@name='Search']await expect (options).toHaveCount(55)

    })
    