import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {Qualifications} from '../pages/QualificationsPages'
import { baseURL } from '../utils'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test.beforeEach(async({page})=>{
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(testdata.login.username, testdata.login.password)
    await page.waitForTimeout(3000)
})
test('Skills Page', async({page})=>{
    const skillspage = new Qualifications(page)
    await skillspage.SkillsPage()
})

test('Education Page',async({page})=>{
    const educationPage = new Qualifications(page)
    await educationPage.EducationPage()
})

test('Licenses Page', async({page})=>{
    const licensesPage = new Qualifications(page)
    await licensesPage.LicensesPage()
})