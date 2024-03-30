import {test, expect} from '@playwright/test'
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        this.dashboard = "//h6[normalize-space()='Dashboard']"
        this.useernameInput = "//input[@placeholder='Username']"
        this.passwordInput = "//input[@placeholder='Password']"
        this.loginBtn = "button[type='submit']"
    }

    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //Actions Methods

    async login(useername, password){
        await this.page.locator(this.useernameInput).fill(useername)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginBtn).click()
        //await expect(this.page.locator(this.dashboard)).toBeVisible()
        await expect(this.page).toHaveTitle('OrangeHRM')
    }
}