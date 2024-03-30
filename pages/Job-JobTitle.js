import {test, expect} from '@playwright/test'
import exp from 'constants'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

exports.JobTitle = class JobTitle{

    constructor(page){
        this.page = page
        this.adminTab = "//span[normalize-space()='Admin']"
        this.jobTab = "//span[normalize-space()='Job']"
        this.jobTitle = "//a[normalize-space()='Job Titles']"
        this.addButton = "//button[normalize-space()='Add']"
        this.jobTitleInput = "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input"
        this.jobDesc = "//textarea[@placeholder='Type description here']"
        this.jobSpec = "//div[@class='oxd-file-button']"
        this.browse = ".oxd-file-button"
        this.fileName = ".oxd-file-input-div"
        this.noteInput = "//textarea[@placeholder='Add note']"
        this.save = "button[type='submit']"
        this.recordsTable = ".oxd-table-body div div div div"
    }


    async gotoLoginPage()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //Actions Methods

    async JobTitlePage()
    {
        await this.page.locator(this.adminTab).click()
        await this.page.locator(this.jobTab).click()
        await this.page.locator(this.jobTitle).click()
        await this.page.locator(this.addButton).click()
        await this.page.locator(this.jobTitleInput).fill(testdata.jobtitle)
        await this.page.locator(this.jobDesc).fill(testdata.jobdesc)
        await this.page.locator(this.jobSpec).click()
        //Upload a File without input element
        const fileChooserPromise = this.page.waitForEvent('filechooser')
        await this.page.locator(this.browse).click()
        const filechooser = await fileChooserPromise
        await filechooser.setFiles('uploadFile/Water_Bill.pdf')
        expect(await this.page.locator(this.fileName)).toHaveText('Water_Bill.pdf')
        await this.page.locator(this.noteInput).fill(testdata.note)
        await this.page.locator(this.save).click()

        const rows = await this.page.locator(this.recordsTable)
        console.log(await rows.count())
        //expect(await this.page.locator(this.recordsTable)).toHaveText("")
        //await this.page.pause()

        await this.page.waitForTimeout(5000)
    }
}