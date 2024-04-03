import {test, expect} from '@playwright/test'

exports.LeaveList = class LeaveList{

    constructor(page){
        this.page = page
        this.LEAVETab = "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a/span"
        this.fromDate = ".oxd-input.oxd-input--active"
        this.crntYears = ".oxd-calendar-selector-year"
        this.crntMonths = ".oxd-calendar-selector-month"
        this.crntDate = ""
        this.nextButton = 'type="button"'
        this.reports = "//span[normalize-space()='Reports']"
        this.EntandUserReport = "//a[normalize-space()='Leave Entitlements and Usage Report']"
        this.leaveType = "//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]"
        this.leavetypeList = ".oxd-select-dropdown div"
    }

    async gotoLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    }

    //Actions Methods

    async leaveList()
    {
        const year = "2024"
        const month = "April"
        const date = "20"


        await this.page.locator(this.LEAVETab).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.fromDate).first().click()

        /*while(true)
        {
            const currentYear=await this.page.locator(this.crntYears).textContent()
            const currentMonth=await this.page.locator(this.crntMonths).textContent()
            if(currentYear == year && currentMonth ==month)
            {
                break;
            }
            await this.page.locator(this.nextButton).click()
            
        }*/
    }

    async ReportsEntAndUser(){
        await this.page.locator(this.LEAVETab).click()
        await this.page.locator(this.reports).click()
        await this.page.locator(this.EntandUserReport).click()
        await this.page.locator(this.leaveType).click()
        await this.page.waitForSelector(this.leavetypeList)
        await this.page.locator(this.leavetypeList).nth(2).click()
        const LTL = await this.page.$$(this.leavetypeList)
        for(let LEAVELTYPELIST of LTL)
        {
            const LeavelTypeList = await LEAVELTYPELIST.textContent()
            console.log(LeavelTypeList)
        } 
        await this.page.waitForTimeout(5000)
    }
}