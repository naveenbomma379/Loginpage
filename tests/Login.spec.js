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
