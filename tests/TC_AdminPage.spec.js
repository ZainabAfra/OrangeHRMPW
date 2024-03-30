import {test, expect} from '@playwright/test'
import {AdminPage} from '../pages/AdminPage'
import {LoginPage} from '../pages/LoginPage'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))


test('Admin Page', async({page})=>{

    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(testdata.login.username, testdata.login.password)

    const adminPage =  new AdminPage(page)
    await adminPage.adminPage()

})