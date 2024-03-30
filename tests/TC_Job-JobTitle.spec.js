import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {JobTitle} from '../pages/Job-JobTitle'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test('JobTitle Page', async({page})=>{

    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(testdata.login.username, testdata.login.password)
    await page.waitForTimeout(3000)

    const jobtitile = new JobTitle(page)
    await jobtitile.JobTitlePage()
})