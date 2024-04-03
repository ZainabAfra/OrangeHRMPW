import {test, expect} from '@playwright/test'
import {LeaveList} from '../pages/LeavePage'
import { LoginPage } from '../pages/LoginPage'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test.beforeEach(async({page})=>{
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(testdata.login.username, testdata.login.password)
    await page.waitForTimeout(3000)
})

test('Leave List page ', async({page})=>{
    const Lev = new LeaveList(page)
    await Lev.leaveList()
})

test.only('Leave Ent and User Report',async({page})=>{
    const Lev = new LeaveList(page)
    await Lev.ReportsEntAndUser()
})