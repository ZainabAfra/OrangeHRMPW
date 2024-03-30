import {test, expect} from '@playwright/test'


exports.AdminPage = class AdminPage{

    constructor(page){
        this.page = page
        this.adminTab = "//span[normalize-space()='Admin']"
        this.headerMessage = "//h6[normalize-space()='User Management']"
        this.userNameInput = "//form/div[1]/div/div[1]/div/div[2]/input"
        this.userRole="//form/div[1]/div/div[2]/div/div[2]/div/div/div[2]"
        this.userRolelist = "//div[@role='listbox']//div[@role='option']//span"
        this.emplyNameInput = "//input[@placeholder='Type for hints...']"
        this.enplyName = "//div[@role='option'][span]"

    }

    async gotoLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    }

    async adminPage()
    {
        await this.page.locator(this.adminTab).click()
        await expect(this.page.locator(this.headerMessage)).toBeVisible()
        await this.page.locator(this.userNameInput).fill('Muhammaed')
        await this.page.locator(this.userRole).click()
        await this.page.waitForSelector(this.userRolelist)
        await this.page.locator(this.userRolelist).nth(1).click()
        //const content = await this.page.locator(this.userRole).textContent()
        //await expect(content.includes('Admin')).toBeTruthy()
        await this.page.locator(this.emplyNameInput).fill('an')
        await this.page.waitForSelector(this.enplyName)
        const ele = await this.page.$$(this.enplyName)
        for(let UN of ele)
        {
            const namelist = await UN.textContent()
            console.log(namelist)
            if(namelist.includes('Peter Mac Anderson'))
            {
                await UN.click()
                break;
            }
        }
        await this.page.waitForTimeout(3000)
    }
}