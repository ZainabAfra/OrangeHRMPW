import {test, expect} from '@playwright/test'
import { generateRandomString } from '../utils'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

exports.Qualifications = class Qualifications{

    constructor(page){
        this.page = page
        this.adminTab = "//span[normalize-space()='Admin']"
        this.qualificationsTab = "//span[normalize-space()='Qualifications']"
        //Skills Elements
        this.skills = "//a[normalize-space()='Skills']"
        //Education Elements
        this.education = "//a[normalize-space()='Education']"
        this.level = "//form/div[1]/div/div[2]/input"
        //Licenses Elements
        this.licenses = "//a[normalize-space()='Licenses']"
        this.addButton = "//button[normalize-space()='Add']"
        this.name = "//form/div[1]/div/div[2]/input"
        this.description = "//textarea[@placeholder='Type description here']"
        this.save = "button[type='submit']"
        this.recordsTable = ".oxd-table-body"
    }
    
    async gotoLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //Actions Methods

    async SkillsPage()
    {
        const randomString = generateRandomString(10)
        await this.page.locator(this.adminTab).click()
        await this.page.locator(this.qualificationsTab).click()
        await this.page.locator(this.skills).click()
        await this.page.locator(this.addButton).click()
        await this.page.locator(this.name).fill(randomString)
        await this.page.locator(this.description).fill(randomString)
        await this.page.locator(this.save).click()
        
        //await expect(await this.page.locator(this.recordsTable)).toHaveText(randomString)
    }

    async EducationPage()
    {
        const randomString = generateRandomString(10)
        await this.page.locator(this.adminTab).click()
        await this.page.locator(this.qualificationsTab).click()
        await this.page.locator(this.education).click()
        await this.page.locator(this.addButton).click()
        await this.page.locator(this.level).fill(randomString)
        await this.page.locator(this.save).click()
        
        
    }

    async LicensesPage()
    {
        const randomString = generateRandomString(10)
        await this.page.locator(this.adminTab).click()
        await this.page.locator(this.qualificationsTab).click()
        await this.page.locator(this.licenses).click()
        await this.page.locator(this.addButton).click()
        await this.page.locator(this.name).fill(randomString)
        await this.page.locator(this.save).click()
        
    }
}