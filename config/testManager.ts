import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/CerrarModalTeDamosBienvenida'
// import { ProfilePage } from '../pageObjectModel/ProfilePage'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    // profilePage: ProfilePage
    cerrarModalTeDamosBienvenida: CerrarModalTeDamosBienvenida

}>({
    // LOGIN PAGE
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
    },

    //COMMONS
    cerrarModalTeDamosBienvenida: async ({ page, context }, use) => {
        await use(new CerrarModalTeDamosBienvenida(page, context, environment))
    },



    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
