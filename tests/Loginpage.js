class loginpage {
    constructor(page) {
        this.page = page;
        this.login = page.locator("((//*[text()='Login'])[2])");
    }

    async logins() {
        await this.login.click();
    }
}

module.exports = { loginpage };