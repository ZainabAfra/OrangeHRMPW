import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))


test('Login page of OrangeHRM', async({page})=>{

    const login = new LoginPage(page) // Created a Object of Login page
    await login.gotoLoginPage()
    await login.login(testdata.login.username, testdata.login.password)
    await page.waitForTimeout(3000)
    
})