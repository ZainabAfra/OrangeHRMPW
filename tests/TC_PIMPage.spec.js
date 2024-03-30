import {test, expect} from '@playwright/test'
import { PIMPage } from '../pages/PIMPage'
import { LoginPage } from '../pages/LoginPage'
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test.beforeEach(async({page})=>{
  const login = new LoginPage(page)
  await login.gotoLoginPage()
  await login.login(testdata.login.username, testdata.login.password)
  await page.waitForTimeout(3000)
})

test('PIM Page Employee List', async({page})=>{
  const PIM =   new PIMPage(page)
  await PIM.pimPage()
  await page.waitForTimeout(3000)
})

test.only("PIM Custom Fields", async({page})=>{
  const PIM =   new PIMPage(page)
  await PIM.CustomFieldsPage()
})