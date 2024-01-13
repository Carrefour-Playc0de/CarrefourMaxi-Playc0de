import { test as baseTest } from '@playwright/test'
// import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/CerrarModalTeDamosBienvenida'
import { IngresarCuenta } from '../pageObjectModel/IngresarCuenta'
import { BotonRetiroEnSucursal } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/BotonRetiroEnSucursal'
import { BotonConfirmarRecibirTuCompra } from '../pageObjectModel/RecibirTuCompra/BotonConfirmarRecibirTuCompra'
import { SelectProvincia } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvincia'
import {
    SelectSucursalArmaPedido
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectSucursalArmaPedido'
// import { ProfilePage } from '../pageObjectModel/ProfilePage'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    // loginPage: LoginPage
    // profilePage: ProfilePage
    cerrarModalTeDamosBienvenida: CerrarModalTeDamosBienvenida
    ingresarCuenta: IngresarCuenta
    botonRetiroEnSucursal: BotonRetiroEnSucursal
    botonConfirmarRecibirTuCompra: BotonConfirmarRecibirTuCompra
    selectProvincia: SelectProvincia
    selectSucursalArmaPedido: SelectSucursalArmaPedido

}>({
    // LOGIN PAGE
    // loginPage: async ({ page, context }, use) => {
    //     const loginPage = new LoginPage(page, context, environment)
    //     await use(loginPage)
    // },

    //COMUNES
    cerrarModalTeDamosBienvenida: async ({ page, context }, use) => {
        await use(new CerrarModalTeDamosBienvenida(page, context, environment))
    },
    ingresarCuenta: async ({ page, context }, use) => {
        await use(new IngresarCuenta(page, context, environment))
    },

    //COMO QUERES RETIRAR TU COMPRA
    botonRetiroEnSucursal: async ({ page, context }, use) => {
        await use(new BotonRetiroEnSucursal(page, context, environment))
    },
    botonConfirmarRecibirTuCompra: async ({ page, context }, use) => {
        await use(new BotonConfirmarRecibirTuCompra(page, context, environment))
    },
    selectProvincia: async ({ page, context }, use) => {
        await use(new SelectProvincia(page, context, environment))
    },
    selectSucursalArmaPedido: async ({ page, context }, use) => {
        await use(new SelectSucursalArmaPedido(page, context, environment))
    },




    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
