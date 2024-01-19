import { test as baseTest } from '@playwright/test'
// import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/MaxiOnLine/CerrarModalTeDamosBienvenida'
import { IngresarCuenta } from '../pageObjectModel/MaxiOnLine/IngresarCuenta'
import { BotonRetiroEnSucursal } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/BotonRetiroEnSucursal'
import { BotonConfirmarRecibirTuCompra } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/BotonConfirmarRecibirTuCompra'
import {
    SelectProvinciaBsAsNorte
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsNorte'
import {
    SelectProvinciaBsAsOeste
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsOeste'
import {
    SelectProvinciaBsAsSur
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaBsAsSur'
import { SelectProvinciaCABA } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCABA'
import {
    SelectProvinciaCatamarca
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCatamarca'
import { SelectProvinciaChaco } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaChaco'
import {
    SelectProvinciaChubut
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaChubut'
import {
    SelectProvinciaCordoba
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCordoba'
import {
    SelectProvinciaCorrientes
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaCorrientes'
import {
    SelectProvinciaEntreRios
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaEntreRios'
import {
    SelectProvinciaFormosa
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaFormosa'
import { SelectProvinciaJujuy } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaJujuy'
import {
    SelectProvinciaLaPampa
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaLaPampa'
import {
    SelectProvinciaLaRioja
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaLaRioja'
import {
    SelectProvinciaMendoza
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaMendoza'
import {
    SelectProvinciaNeuquen
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaNeuquen'
import {
    SelectProvinciaRioNegro
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaRioNegro'
import { SelectProvinciaSalta } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSalta'
import {
    SelectProvinciaSanJuan
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSanJuan'
import {
    SelectProvinciaSanLuis
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSanLuis'
import {
    SelectProvinciaSantaCruz
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSantaCruz'
import {
    SelectProvinciaSantaFe
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaSantaFe'
import {
    SelectProvinciaTierraDelFuego
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaTierraDelFuego'
import {
    SelectProvinciaTucuman
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectProvinciaTucuman'
import {
    SelectSucursalArmaPedidoCAMPANAColectoraNorte1647
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/SelectSucursalArmaPedidoCAMPANAColectoraNorte1647'
import { BotonConfirmar } from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/BotonConfirmar'
import {
    ModalIngresaTusDatos
} from '../pageObjectModel/MaxiOnLine/RecibirTuCompra/RetiroEnSucursal/Sucursal/IngresaTusDatos/ModalIngresaTusDatos'
import { MenuHamburguesa } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHambur'
import { MenuHamburAlmacen } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburAlmacen'
import { MenuHamburBazarTextil } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburBazarTextil'
import { MenuHamburBebidas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburBebidas'
import { MenuHamburDesayunoMerienda } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburDesayunoMerienda'
import { MenuHamburLacteosProdsFrescos } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburLacteosProdsFrescos'
import { MenuHamburLimpieza } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburLimpieza'
import { MenuHamburMascotas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburMascotas'
import { MenuHamburMundoBebe } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburMundoBebe'
import { MenuHamburPanaderia } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburPanaderia'
import { MenuHamburPerfumeria } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburPerfumeria'
import { MenuHamburAlmacenVerTodo } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenVerTodo'
import {
    MenuHamburAlmacenArrozLegumbres
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenArrozLegumbres'
import { MenuHamburAlmacenArroz } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenBebidas'
import {
    MenuHamburAlmacenCaldosSopasPure
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenCaldosSopasPure'
import {
    MenuHamburAlmacenEnlatadosConservas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenEnlatadosConservas'
import {
    MenuHamburAlmacenGolosinasChocolates
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenGolosinasChocolates'
import { MenuHamburAlmacenHarinas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenHarinas'
import { MenuHamburAlmacenPastasSecas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenPastasSecas'
import {
    MenuHamburAlmacenReposteriaPostres
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenReposteriaPostres'
import {
    MenuHamburAlmacenSalAderezosSaborizadores
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenSalAderezosSaborizadores'
import { MenuHamburAlmacenSnacks } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenSnacks'
import {
    MenuHamburguesaAlmacenAceitesVinagres
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesVinagres'
import {
    MenuHamburBazarTextilVerTodo
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVerTodo'
import {
    MenuHamburBazarTextilAutomotor
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAutomotor'
import {
    MenuHamburBazarTextilCocinaComedor
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCocinaComedor'
import {
    MenuHamburBazarTextilDecoOrganizacion
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDecoOrganizacion'
import {
    MenuHamburBazarTextilFerreteriaPintura
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilFerreteriaPintura'
import {
    MenuHamburBazarTextilLibreria
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLibreria'
import {
    MenuHamburBebidasVerTodo
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasVerTodo'
import { MenuHamburBebidasAguas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasAguas'
import {
    MenuHamburBebidasBebidasBlancas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasBlancas'
import {
    MenuHamburBebidasBebidasEnergizantes
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasEnergizantes'
import {
    MenuHamburBebidasBebidasIsotonicas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasIsotonicas'
import {
    MenuHamburguesaBebidasCervezas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasCervezas'
import {
    MenuHamburBebidasEspumantesSidras
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasEspumantesSidras'
import {
    MenuHamburBebidasFernetAperitivos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasFernetAperitivos'
import {
    MenuHamburBebidasGaseosas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosas'
import { MenuHamburBebidasJugos } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasJugos'
import { MenuHamburBebidasVinos } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Bebidas/MenuHamburBebidasVinos'
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
    menuHamburguesa: MenuHamburguesa
    menuHamburAlmacen: MenuHamburAlmacen
    menuHamburBazarTextil: MenuHamburBazarTextil
    menuHamburBebidas: MenuHamburBebidas
    menuHamburDesayunoMerienda: MenuHamburDesayunoMerienda
    menuHamburLacteosProdsFrescos: MenuHamburLacteosProdsFrescos
    menuHamburLimpieza: MenuHamburLimpieza
    menuHamburMascotas: MenuHamburMascotas
    menuHamburMundoBebe: MenuHamburMundoBebe
    menuHamburPanaderia: MenuHamburPanaderia
    menuHamburPerfumeria: MenuHamburPerfumeria
    menuHamburAlmacenVerTodo: MenuHamburAlmacenVerTodo
    menuHamburAlmacenArrozLegumbres: MenuHamburAlmacenArrozLegumbres
    menuHamburAlmacenArroz: MenuHamburAlmacenArroz
    menuHamburAlmacenCaldosSopasPure: MenuHamburAlmacenCaldosSopasPure
    menuHamburAlmacenEnlatadosConservas: MenuHamburAlmacenEnlatadosConservas
    menuHamburAlmacenGolosinasChocolates: MenuHamburAlmacenGolosinasChocolates
    menuHamburAlmacenHarinas: MenuHamburAlmacenHarinas
    menuHamburAlmacenPastasSecas: MenuHamburAlmacenPastasSecas
    menuHamburAlmacenReposteriaPostres: MenuHamburAlmacenReposteriaPostres
    menuHamburAlmacenSalAderezosSaborizadores: MenuHamburAlmacenSalAderezosSaborizadores
    menuHamburAlmacenSnacks: MenuHamburAlmacenSnacks
    menuHamburguesaAlmacenAceitesVinagres: MenuHamburguesaAlmacenAceitesVinagres
    menuHamburBazarTextilVerTodo: MenuHamburBazarTextilVerTodo
    menuHamburBazarTextilAutomotor: MenuHamburBazarTextilAutomotor
    menuHamburBazarTextilCocinaComedor: MenuHamburBazarTextilCocinaComedor
    menuHamburBazarTextilDecoOrganizacion: MenuHamburBazarTextilDecoOrganizacion
    menuHamburBazarTextilFerreteriaPintura: MenuHamburBazarTextilFerreteriaPintura
    menuHamburBazarTextilLibreria: MenuHamburBazarTextilLibreria
    menuHamburBebidasVerTodo: MenuHamburBebidasVerTodo
    menuHamburBebidasAguas: MenuHamburBebidasAguas
    menuHamburBebidasBebidasBlancas: MenuHamburBebidasBebidasBlancas
    menuHamburBebidasBebidasEnergizantes: MenuHamburBebidasBebidasEnergizantes
    menuHamburBebidasBebidasIsotonicas: MenuHamburBebidasBebidasIsotonicas
    menuHamburguesaBebidasCervezas: MenuHamburguesaBebidasCervezas
    menuHamburBebidasEspumantesSidras: MenuHamburBebidasEspumantesSidras
    menuHamburBebidasFernetAperitivos: MenuHamburBebidasFernetAperitivos
    menuHamburBebidasGaseosas: MenuHamburBebidasGaseosas
    menuHamburBebidasJugos: MenuHamburBebidasJugos
    menuHamburBebidasVinos: MenuHamburBebidasVinos


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

    menuHamburguesaBebidasCervezas: async ({ page, context }, use) => {
        await use(new MenuHamburguesaBebidasCervezas(page, context, environment))
    },
    menuHamburBebidasEspumantesSidras: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasEspumantesSidras(page, context, environment))
    },
    menuHamburBebidasFernetAperitivos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasFernetAperitivos(page, context, environment))
    },
    menuHamburBebidasGaseosas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosas(page, context, environment))
    },
    menuHamburBebidasJugos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugos(page, context, environment))
    },
    menuHamburBebidasVinos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinos(page, context, environment))
    },





    // MENU HAMBURGUESA - BEBIDAS
    menuHamburBebidasVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVerTodo(page, context, environment))
    },
    menuHamburBebidasAguas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAguas(page, context, environment))
    },
    menuHamburBebidasBebidasBlancas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasBlancas(page, context, environment))
    },
    menuHamburBebidasBebidasEnergizantes: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasEnergizantes(page, context, environment))
    },
    menuHamburBebidasBebidasIsotonicas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasIsotonicas(page, context, environment))
    },





    // MENU HAMBURGUESA - BAZAR Y TEXTIL
    menuHamburBazarTextilVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVerTodo(page, context, environment))
    },
    menuHamburBazarTextilAutomotor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAutomotor(page, context, environment))
    },
    menuHamburBazarTextilCocinaComedor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCocinaComedor(page, context, environment))
    },
    menuHamburBazarTextilDecoOrganizacion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDecoOrganizacion(page, context, environment))
    },
    menuHamburBazarTextilFerreteriaPintura: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilFerreteriaPintura(page, context, environment))
    },
    menuHamburBazarTextilLibreria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLibreria(page, context, environment))
    },

    // MENU HAMBURGUESA - ALMACEN
    menuHamburAlmacenVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenVerTodo(page, context, environment))
    },
    menuHamburAlmacenArrozLegumbres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenArrozLegumbres(page, context, environment))
    },
    menuHamburAlmacenArroz: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenArroz(page, context, environment))
    },
    menuHamburAlmacenCaldosSopasPure: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenCaldosSopasPure(page, context, environment))
    },
    menuHamburAlmacenEnlatadosConservas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenEnlatadosConservas(page, context, environment))
    },
    menuHamburAlmacenGolosinasChocolates: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenGolosinasChocolates(page, context, environment))
    },
    menuHamburAlmacenHarinas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenHarinas(page, context, environment))
    },
    menuHamburAlmacenPastasSecas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPastasSecas(page, context, environment))
    },
    menuHamburAlmacenReposteriaPostres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenReposteriaPostres(page, context, environment))
    },
    menuHamburAlmacenSalAderezosSaborizadores: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSalAderezosSaborizadores(page, context, environment))
    },
    menuHamburAlmacenSnacks: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSnacks(page, context, environment))
    },
    menuHamburguesaAlmacenAceitesVinagres: async ({ page, context }, use) => {
        await use(new MenuHamburguesaAlmacenAceitesVinagres(page, context, environment))
    },

    // MENU HAMBURGUESA
    menuHamburguesa: async ({ page, context }, use) => {
        await use(new MenuHamburguesa(page, context, environment))
    },
    menuHamburAlmacen: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacen(page, context, environment))
    },
    menuHamburBazarTextil: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextil(page, context, environment))
    },
    menuHamburBebidas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidas(page, context, environment))
    },
    menuHamburDesayunoMerienda: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMerienda(page, context, environment))
    },
    menuHamburLacteosProdsFrescos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescos(page, context, environment))
    },
    menuHamburLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpieza(page, context, environment))
    },
    menuHamburMascotas: async ({ page, context }, use) => {
        await use(new MenuHamburMascotas(page, context, environment))
    },
    menuHamburMundoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebe(page, context, environment))
    },
    menuHamburPanaderia: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderia(page, context, environment))
    },
    menuHamburPerfumeria: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeria(page, context, environment))
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
