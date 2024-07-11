
const memberdata = require ('../Testdata/Credential.json')

class Registerpage{
    constructor(page){
        this.page= page;
        this.RegisterButton = page.locator("(//*[text()='Register'])[1]");
        this.Memberid = page.locator("//*[@id='register_MemberId']");
        this.continubutton =page.locator("(//*[text()='Continue'])[2]");
        this.Firstname =page.locator("//*[@id='register_firstName']");
        this.Lastname =page.locator("//*[@id='register_lastName']");
        this.dob = page.locator("//*[@id='register_dateOfBirth']");
        this.Password =page.locator("//*[@id='password']");
        this.Confirmpassword=page.locator("//*[@id='confirmPassword']");
        this.nextpage =page.locator("(//*[text()='Next'])[1]");
        this.checkbox=page.locator("(//input[@class='form-check-input'])[1]");
        this.question1=page.locator("(//*[@class='form-control minimal'])[1]");
        this.question2=page.locator("(//*[@class='form-control minimal'])[2]");
        this.answser1=page.locator("//*[@id='register_securityAnswers0']");
        this.answser2=page.locator("//*[@id='register_securityAnswers1']");
        this.createaccount=page.locator("(//*[text()='Create Account'])[1]");
    }
    async loginUrl()
    {
    await this.page.goto(memberdata.URL)
    }
    async clickRegisterButton() 
    {
        await this.RegisterButton.click();
    }
    async enterMemberId() 
    {
        await this.Memberid.fill(memberdata.Memberid);
    }
    async clickContinueButton() {
        await this.continubutton.click();
    }
    async enterFirstName()
    {
        await this.Firstname.fill(memberdata.Firstname);
    }
    async enterLastName()
    {
        await this.Lastname.fill(memberdata.Lastname);
    }
    async enterDateOfBirth()
    {
        await this.dob.fill(memberdata.DOB)
    }
    async enterPassword() 
    {
        await this.Password.fill(memberdata.Password);
    }

    async enterConfirmPassword() 
    {
        await this.Confirmpassword.fill(memberdata.ConfirmPassword);
    }
   async Nextbutton()
   {
        await this.nextpage.click();
   }
   async clickoncheckbox()
   {
        await this.checkbox.click();
   }
  async selectQuestion1(index) 
    {
        await this.question1.selectOption({ index: index });
    }
  async enterAnswer1()
    {
        await this.answser1.fill(memberdata.securityans);
    }
    async selectQuestion2(index) 
    {
        await this.question2.selectOption({ index: index });
    }
    async enterAnswer2() 
    {
        await this.answser2.fill(memberdata.securityansw);
    }

    async clickCreateAccount() 
    {
        await this.createaccount.click();
    }
}

module.exports = { Registerpage };

