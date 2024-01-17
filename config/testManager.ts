import { test as baseTest } from '@playwright/test'
// import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/CerrarModalTeDamosBienvenida'
import { IngresarCuenta } from '../pageObjectModel/IngresarCuenta'
import { BotonRetiroEnSucursal } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/BotonRetiroEnSucursal'
import { BotonConfirmarRecibirTuCompra } from '../pageObjectModel/RecibirTuCompra/BotonConfirmarRecibirTuCompra'
import {
    SelectProvinciaBsAsNorte
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsNorte'
import {
    SelectProvinciaBsAsOeste
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsOeste'
import {
    SelectProvinciaBsAsSur
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsSur'
import { SelectProvinciaCABA } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCABA'
import {
    SelectProvinciaCatamarca
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCatamarca'
import { SelectProvinciaChaco } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaChaco'
import {
    SelectProvinciaChubut
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaChubut'
import {
    SelectProvinciaCordoba
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCordoba'
import {
    SelectProvinciaCorrientes
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCorrientes'
import {
    SelectProvinciaEntreRios
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaEntreRios'
import {
    SelectProvinciaFormosa
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaFormosa'
import { SelectProvinciaJujuy } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaJujuy'
import {
    SelectProvinciaLaPampa
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaLaPampa'
import {
    SelectProvinciaLaRioja
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaLaRioja'
import {
    SelectProvinciaMendoza
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaMendoza'
import {
    SelectProvinciaNeuquen
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaNeuquen'
import {
    SelectProvinciaRioNegro
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaRioNegro'
import { SelectProvinciaSalta } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSalta'
import {
    SelectProvinciaSanJuan
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSanJuan'
import {
    SelectProvinciaSanLuis
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSanLuis'
import {
    SelectProvinciaSantaCruz
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSantaCruz'
import {
    SelectProvinciaSantaFe
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSantaFe'
import {
    SelectProvinciaTierraDelFuego
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaTierraDelFuego'
import {
    SelectProvinciaTucuman
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaTucuman'
import {
    SelectSucursalArmaPedidoCAMPANAColectoraNorte1647
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectSucursalArmaPedidoCAMPANAColectoraNorte1647'
import { BotonConfirmar } from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/BotonConfirmar'
import {
    ModalIngresaTusDatos
} from '../pageObjectModel/RecibirTuCompra/RetiroEnSucursal/Sucursal/IngresaTusDatos/ModalIngresaTusDatos'
// import { ProfilePage } from '../pageObjectModel/ProfilePage'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    // loginPage: LoginPage
    // profilePage: ProfilePage
    cerrarModalTeDamosBienvenida: CerrarModalTeDamosBienvenida
    ingresarCuenta: IngresarCuenta
    botonRetiroEnSucursal: BotonRetiroEnSucursal
    botonConfirmarRecibirTuCompra: BotonConfirmarRecibirTuCompra
    selectProvinciaBsAsNorte: SelectProvinciaBsAsNorte
    selectProvinciaBsAsOeste: SelectProvinciaBsAsOeste
    selectProvinciaBsAsSur: SelectProvinciaBsAsSur
    selectProvinciaCABA: SelectProvinciaCABA
    selectProvinciaCatamarca: SelectProvinciaCatamarca
    selectProvinciaChaco: SelectProvinciaChaco
    selectProvinciaChubut: SelectProvinciaChubut
    selectProvinciaCordoba: SelectProvinciaCordoba
    selectProvinciaCorrientes: SelectProvinciaCorrientes
    selectProvinciaEntreRios: SelectProvinciaEntreRios
    selectProvinciaFormosa: SelectProvinciaFormosa
    selectProvinciaJujuy: SelectProvinciaJujuy
    selectProvinciaLaPampa: SelectProvinciaLaPampa
    selectProvinciaLaRioja: SelectProvinciaLaRioja
    selectProvinciaMendoza: SelectProvinciaMendoza
    selectProvinciaNeuquen: SelectProvinciaNeuquen
    selectProvinciaRioNegro: SelectProvinciaRioNegro
    selectProvinciaSalta: SelectProvinciaSalta
    selectProvinciaSanJuan: SelectProvinciaSanJuan
    selectProvinciaSanLuis: SelectProvinciaSanLuis
    selectProvinciaSantaCruz: SelectProvinciaSantaCruz
    selectProvinciaSantaFe: SelectProvinciaSantaFe
    selectProvinciaTierraDelFuego: SelectProvinciaTierraDelFuego
    selectProvinciaTucuman: SelectProvinciaTucuman
    selectSucursalArmaPedidoCAMPANAColectoraNorte1647: SelectSucursalArmaPedidoCAMPANAColectoraNorte1647
    botonConfirmar: BotonConfirmar
    modalIngresaTusDatos: ModalIngresaTusDatos

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
    selectProvinciaBsAsNorte: async ({ page, context }, use) => {
        await use(new SelectProvinciaBsAsNorte(page, context, environment))
    },
    selectProvinciaBsAsOeste: async ({ page, context }, use) => {
        await use(new SelectProvinciaBsAsOeste(page, context, environment))
    },
    selectProvinciaBsAsSur: async ({ page, context }, use) => {
        await use(new SelectProvinciaBsAsSur(page, context, environment))
    },
    selectProvinciaCABA: async ({ page, context }, use) => {
        await use(new SelectProvinciaCABA(page, context, environment))
    },
    selectProvinciaCatamarca: async ({ page, context }, use) => {
        await use(new SelectProvinciaCatamarca(page, context, environment))
    },
    selectProvinciaChaco: async ({ page, context }, use) => {
        await use(new SelectProvinciaChaco(page, context, environment))
    },
    selectProvinciaChubut: async ({ page, context }, use) => {
        await use(new SelectProvinciaChubut(page, context, environment))
    },
    selectProvinciaCordoba: async ({ page, context }, use) => {
        await use(new SelectProvinciaCordoba(page, context, environment))
    },
    selectProvinciaCorrientes: async ({ page, context }, use) => {
        await use(new SelectProvinciaCorrientes(page, context, environment))
    },
    selectProvinciaEntreRios: async ({ page, context }, use) => {
        await use(new SelectProvinciaEntreRios(page, context, environment))
    },
    selectProvinciaFormosa: async ({ page, context }, use) => {
        await use(new SelectProvinciaFormosa(page, context, environment))
    },
    selectProvinciaJujuy: async ({ page, context }, use) => {
        await use(new SelectProvinciaJujuy(page, context, environment))
    },
    selectProvinciaLaPampa: async ({ page, context }, use) => {
        await use(new SelectProvinciaLaPampa(page, context, environment))
    },
    selectProvinciaLaRioja: async ({ page, context }, use) => {
        await use(new SelectProvinciaLaRioja(page, context, environment))
    },
    selectProvinciaMendoza: async ({ page, context }, use) => {
        await use(new SelectProvinciaMendoza(page, context, environment))
    },
    selectProvinciaNeuquen: async ({ page, context }, use) => {
        await use(new SelectProvinciaNeuquen(page, context, environment))
    },
    selectProvinciaRioNegro: async ({ page, context }, use) => {
        await use(new SelectProvinciaRioNegro(page, context, environment))
    },
    selectProvinciaSalta: async ({ page, context }, use) => {
        await use(new SelectProvinciaSalta(page, context, environment))
    },
    selectProvinciaSanJuan: async ({ page, context }, use) => {
        await use(new SelectProvinciaSanJuan(page, context, environment))
    },
    selectProvinciaSanLuis: async ({ page, context }, use) => {
        await use(new SelectProvinciaSanLuis(page, context, environment))
    },
    selectProvinciaSantaCruz: async ({ page, context }, use) => {
        await use(new SelectProvinciaSantaCruz(page, context, environment))
    },
    selectProvinciaSantaFe: async ({ page, context }, use) => {
        await use(new SelectProvinciaSantaFe(page, context, environment))
    },
    selectProvinciaTierraDelFuego: async ({ page, context }, use) => {
        await use(new SelectProvinciaTierraDelFuego(page, context, environment))
    },
    selectProvinciaTucuman: async ({ page, context }, use) => {
        await use(new SelectProvinciaTucuman(page, context, environment))
    },
    selectSucursalArmaPedidoCAMPANAColectoraNorte1647: async ({ page, context }, use) => {
        await use(new SelectSucursalArmaPedidoCAMPANAColectoraNorte1647(page, context, environment))
    },
    botonConfirmar: async ({ page, context }, use) => {
        await use(new BotonConfirmar(page, context, environment))
    },
    modalIngresaTusDatos: async ({ page, context }, use) => {
        await use(new ModalIngresaTusDatos(page, context, environment))
    },










    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
