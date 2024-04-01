import {test, expect} from '@playwright/test'
import { generateRandomString } from '../utils'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

exports.PIMPage = class PIMPage{

    constructor(page){
        this.page = page
        this.PIMTab = "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span"
        this.PimHeader = "//h6[normalize-space()='PIM']"
        this.employeeIdInput = "(//input[@class='oxd-input oxd-input--active'])[2]"
        this.employeeName = "(//input[@placeholder='Type for hints...'])[1]"
        this.emplnamelist = "//div[@role='option'][span]"
        this.emplyStatus = "//div[@class='oxd-table-filter']//div[3]//div[1]//div[2]//div[1]//div[1]//div[2]"
        this.emplyStatusList = ".oxd-select-dropdown div"
        this.supervisorName = "(//input[@placeholder='Type for hints...'])[2]"
        this.supervisorList="//div[@role='option'][span]"
        this.jobTitle = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i"
        this.jobTitleList = ".oxd-select-dropdown div"
        this.configuration = "//span[@class='oxd-topbar-body-nav-tab-item']"
        this.customFields = "//a[normalize-space()='Custom Fields']"
        this.addButton = "//button[normalize-space()='Add']"
        this.screen = "//form/div[1]/div/div[2]/div/div[2]/div/div"
        this.screenList = ".oxd-select-dropdown div"
        this.fieldName = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/input'
        this.type = "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div/div"
        this.typeList = ".oxd-select-dropdown div"
        this.selectOption = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/input'
        this.save = "button[type='submit']"
    }
    

    async gotoLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    }

    //Actions Methods

    async pimPage(){
        const randomString = generateRandomString(10)
        await this.page.locator(this.PIMTab).click()
        await expect(this.page.locator(this.PimHeader)).toBeVisible()
        await this.page.locator(this.employeeName).first().fill('an')
        //await this.page.getByPlaceholder('Type for hints...').first().fill('an')
        await this.page.waitForSelector(this.emplnamelist)
        const ele = await this.page.$$(this.emplnamelist)
        for(let EN of ele)
        {
            const EmpNameList = await EN.textContent()
            console.log(EmpNameList)
            if(EmpNameList.includes('Joseph  Evans'))
            {
                await EN.click()
                break;
            }
        }
        await this.page.locator(this.employeeIdInput).fill(testdata.employeeInfo.emplId)
        await this.page.locator(this.emplyStatus).click()
        await this.page.waitForSelector(this.emplyStatusList)
        await this.page.locator(this.emplyStatusList).nth(2).click()
        await this.page.locator(this.supervisorName).first().fill('ma')
        await this.page.waitForSelector(this.supervisorList)
        const eleSL = await this.page.$$(this.supervisorList)
        for(let SL of eleSL)
        {
            const SupvNameList = await SL.textContent()
            console.log(SupvNameList)
            if(SupvNameList.includes('sree hema latha'))
            {
                await SL.click()
                break;
            }
        }
        await this.page.locator(this.jobTitle).click()
        await this.page.waitForSelector(this.jobTitleList)
        const jtl = await this.page.$$(this.jobTitleList)
        for(let JOBTITLELIST of jtl)
        {
            const TitleList = await JOBTITLELIST.textContent()
            console.log(TitleList)
        }
        await this.page.locator(this.jobTitleList).nth(3).click()
        
    }

    async CustomFieldsPage(){
        const randomString = generateRandomString(10)
        await this.page.locator(this.PIMTab).click()
        await this.page.locator(this.configuration).click()
        await this.page.locator(this.customFields).click()
        await this.page.locator(this.addButton).click()
        await this.page.locator(this.fieldName).fill(randomString)
        await this.page.locator(this.screen).click()
        await this.page.waitForSelector(this.screenList)
        const SCR = await this.page.$$(this.screenList)
        for(let SCREEN of SCR)
        {
            const ScreenList = await SCREEN.textContent()
            console.log(ScreenList)
        }
        await this.page.locator(this.screenList).nth(3).click()
        await this.page.locator(this.type).first().click()
        await this.page.waitForSelector(this.typeList)
        const typ = await this.page.$$(this.typeList)
        for (let TYPE of typ)
        {
            const TypeList = await TYPE.textContent()
            console.log(TypeList)
        }
        await this.page.locator(this.typeList).nth(1).click()
        //await this.page.locator(this.selectOption).fill("Phone")
        await this.page.locator(this.save).click()
        await this.page.waitForTimeout(5000)
    }
    
}