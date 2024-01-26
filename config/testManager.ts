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
import {
    MenuHamburDesayunoMeriendaVerTodo
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaVerTodo'
import {
    MenuHamburDesayunoMeriendaAzucarEndulzantes
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaAzucarEndulzantes'
import {
    MenuHamburDesayunoMeriendaBudinesMagdalenas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBudinesMagdalenas'
import {
    MenuHamburDesayunoMeriendaCafe
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCafe'
import {
    MenuHamburDesayunoMeriendaCerealesBarritas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCerealesBarritas'
import {
    MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas'
import {
    MenuHamburDesayunoMeriendaInfusiones
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaInfusiones'
import {
    MenuHamburDesayunoMeriendaMermeladasOtrosDulces
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMermeladasOtrosDulces'
import {
    MenuHamburDesayunoMeriendaYerba
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaYerba'
import {
    MenuHamburLacteosProdsFrescosVerTodo
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosVerTodo'
import {
    MenuHamburLacteosProdsFrescosDulceDeLeche
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosDulceDeLeche'
import {
    MenuHamburLacteosProdsFrescosLeches
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLeches'
import {
    MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida'
import {
    MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras'
import {
    MenuHamburLacteosProdsFrescosPAS
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosPAS'
import {
    MenuHamburLacteosProdsFrescosQuesos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesos'
import {
    MenuHamburLacteosProdsFrescosSeco
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosSeco'
import {
    MenuHamburLimpiezaVerTodo
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaVerTodo'
import {
    MenuHamburLimpiezaArticulosLimpieza
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaArticulosLimpieza'
import {
    MenuHamburLimpiezaDesodorantesAmbiente
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDesodorantesAmbiente'
import {
    MenuHamburLimpiezaInsecticidas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaInsecticidas'
import {
    MenuHamburLimpiezaLavandinas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLavandinas'
import {
    MenuHamburLimpiezaLimpiezaBanio
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaBanio'
import {
    MenuHamburLimpiezaLimpiezaCocina
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaCocina'
import {
    MenuHamburLimpiezaLimpiezaPisosMuebles
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaPisosMuebles'
import {
    MenuHamburLimpiezaLimpiezaRopa
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaRopa'
import {
    MenuHamburLimpiezaPapelesHigienicos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPapelesHigienicos'
import {
    MenuHamburLimpiezaRollosCocinaServilletas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Limpieza/MenuHamburLimpiezaRollosCocinaServilletas'
import {
    MenuHamburMascotasVerTodos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Mascotas/MenuHamburMascotasVerTodos'
import {
    MenuHamburMascotasAlimentosGatos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Mascotas/MenuHamburMascotasAlimentosGatos'
import {
    MenuHamburMascotasAlimentosSnacksPerros
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Mascotas/MenuHamburMascotasAlimentosSnacksPerros'
import {
    MenuHamburMascotasHigieneAccesoriosGatos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Mascotas/MenuHamburMascotasHigieneAccesoriosGatos'
import {
    MenuHamburMundoBebeVerTodos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeVerTodos'
import {
    MenuHamburMundoBebeAlimentoBebe
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeAlimentoBebe'
import {
    MenuHamburMundoBebeDespuesBanio
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeDespuesBanio'
import {
    MenuHamburMundoBebePaniales
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebePaniales'
import {
    MenuHamburMundoBebeParaElBanio
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeParaElBanio'
import {
    MenuHamburMundoBebeToallitasHumedas
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeToallitasHumedas'
import {
    MenuHamburPanaderiaVerTodos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Panaderia/MenuHamburPanaderiaVerTodos'
import {
    MenuHamburPanaderiaPanRalladoRebozadores
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanRalladoRebozadores'
import {
    MenuHamburPanaderiaPanificados
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanificados'
import {
    MenuHamburPerfumeriaVerTodos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaVerTodos'
import {
    MenuHamburPerfumeriaAlgodonesHisopos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaAlgodonesHisopos'
import {
    MenuHamburPerfumeriaAntitranspirantesDesodorantes
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaAntitranspirantesDesodorantes'
import {
    MenuHamburPerfumeriaCuidadoCorporal
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoCorporal'
import {
    MenuHamburPerfumeriaCuidadoPiel
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoPiel'
import {
    MenuHamburPerfumeriaCuidadoDelCabello
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoDelCabello'
import {
    MenuHamburPerfumeriaCuidadoDental
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoDental'
import {
    MenuHamburPerfumeriaFarmacia
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaFarmacia'
import {
    MenuHamburPerfumeriaJabones
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaJabones'
import {
    MenuHamburPerfumeriaProteccionFemenina
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaProteccionFemenina'
import {
    MenuHamburPerfumeriaProteccionAdultos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaProteccionAdultos'
import {
    MenuHamburPerfumeriaRepelentes
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaRepelentes'
import {
    MenuHamburOfertasVerTodos
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Ofertas/MenuHamburOfertasVerTodos'
import { MenuHamburOfertas } from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/MenuHamburOfertas'
import {
    MenuHamburOfertasEspecialesDelDia
} from '../pageObjectModel/MaxiOnLine/MenuHamburguesa/Ofertas/MenuHamburOfertasEspecialesDelDia'
import { HeaderElegiFormaEntrega } from '../pageObjectModel/MaxiOnLine/Header/HeaderElegiFormaEntrega'
import { HeaderFolletos } from '../pageObjectModel/MaxiOnLine/Header/HeaderFolletos'
import { HeaderSucursales } from '../pageObjectModel/MaxiOnLine/Header/HeaderSucursales'
import {
    FolletosSelectProvinciaLocalidadAvellaneda
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadAvellaneda'
import {
    FolletosSelectProvinciaLocalidadBurzaco
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadBurzaco'
import {
    FolletosSelectProvinciaLocalidadEscobar
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadEscobar'
import {
    FolletosSelectProvinciaLocalidadEzpeleta
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadEzpeleta'
import {
    FolletosSelectProvinciaLocalidadItuzaingo
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadItuzaingo'
import {
    FolletosSelectProvinciaLocalidadJoseCPaz
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadJoseCPaz'
import {
    FolletosSelectProvinciaLocalidadJoseLeonSuarez
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadJoseLeonSuarez'
import {
    FolletosSelectProvinciaLocalidadLaferrere
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadLaferrere'
import {
    FolletosSelectProvinciaLocalidadLomaHermosa
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadLomaHermosa'
import {
    FolletosSelectProvinciaLocalidadLomasDeZamora
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadLomasDeZamora'
import {
    FolletosSelectProvinciaLocalidadMoreno
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadMoreno'
import {
    FolletosSelectProvinciaLocalidadPilar
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadPilar'
import {
    FolletosSelectProvinciaLocalidadSanVicente
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadSanVicente'
import {
    FolletosSelectProvinciaLocalidadTandil
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadTandil'
import {
    FolletosSelectProvinciaLocalidadTemperley
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadTemperley'
import {
    FolletosSelectProvinciaLocalidadTigre
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadTigre'
import {
    FolletosSelectProvinciaLocalidadTortuguitas
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadTortuguitas'
import {
    FolletosSelectProvinciaLocalidadCatamarca
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadCatamarca'
import {
    FolletosSelectProvinciaLocalidadChaco
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadChaco'
import {
    FolletosSelectProvinciaLocalidadCordoba
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadCordoba'
import {
    FolletosSelectProvinciaLocalidadMendoza
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadMendoza'
import {
    FolletosSelectProvinciaLocalidadEntreRios
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadEntreRios'
import {
    FolletosSelectProvinciaLocalidadJujuy
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidadJujuy'
import {
    FolletosSelectProvinciaLocalidad
} from '../pageObjectModel/MaxiOnLine/Header/Folletos/FolletosSelectProvinciaLocalidad'
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
    menuHamburDesayunoMeriendaVerTodo: MenuHamburDesayunoMeriendaVerTodo
    menuHamburDesayunoMeriendaAzucarEndulzantes: MenuHamburDesayunoMeriendaAzucarEndulzantes
    menuHamburDesayunoMeriendaBudinesMagdalenas: MenuHamburDesayunoMeriendaBudinesMagdalenas
    menuHamburDesayunoMeriendaCafe: MenuHamburDesayunoMeriendaCafe
    menuHamburDesayunoMeriendaCerealesBarritas: MenuHamburDesayunoMeriendaCerealesBarritas
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
    menuHamburDesayunoMeriendaInfusiones: MenuHamburDesayunoMeriendaInfusiones
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: MenuHamburDesayunoMeriendaMermeladasOtrosDulces
    menuHamburDesayunoMeriendaYerba: MenuHamburDesayunoMeriendaYerba
    menuHamburLacteosProdsFrescosVerTodo: MenuHamburLacteosProdsFrescosVerTodo
    menuHamburLacteosProdsFrescosDulceDeLeche: MenuHamburLacteosProdsFrescosDulceDeLeche
    menuHamburLacteosProdsFrescosLeches: MenuHamburLacteosProdsFrescosLeches
    menuHamburLacteosProdsFrescosLechesPolvoYLargaVida: MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida
    menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras: MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras
    menuHamburLacteosProdsFrescosPAS: MenuHamburLacteosProdsFrescosPAS
    menuHamburLacteosProdsFrescosQuesos: MenuHamburLacteosProdsFrescosQuesos
    menuHamburLacteosProdsFrescosSeco: MenuHamburLacteosProdsFrescosSeco
    menuHamburLimpiezaVerTodo: MenuHamburLimpiezaVerTodo
    menuHamburLimpiezaArticulosLimpieza: MenuHamburLimpiezaArticulosLimpieza
    menuHamburLimpiezaDesodorantesAmbiente: MenuHamburLimpiezaDesodorantesAmbiente
    menuHamburLimpiezaInsecticidas: MenuHamburLimpiezaInsecticidas
    menuHamburLimpiezaLavandinas: MenuHamburLimpiezaLavandinas
    menuHamburLimpiezaLimpiezaBanio: MenuHamburLimpiezaLimpiezaBanio
    menuHamburLimpiezaLimpiezaCocina: MenuHamburLimpiezaLimpiezaCocina
    menuHamburLimpiezaLimpiezaPisosMuebles: MenuHamburLimpiezaLimpiezaPisosMuebles
    menuHamburLimpiezaLimpiezaRopa: MenuHamburLimpiezaLimpiezaRopa
    menuHamburLimpiezaPapelesHigienicos: MenuHamburLimpiezaPapelesHigienicos
    menuHamburLimpiezaRollosCocinaServilletas: MenuHamburLimpiezaRollosCocinaServilletas
    menuHamburMascotasVerTodos: MenuHamburMascotasVerTodos
    menuHamburMascotasAlimentosGatos: MenuHamburMascotasAlimentosGatos
    menuHamburMascotasAlimentosSnacksPerros: MenuHamburMascotasAlimentosSnacksPerros
    menuHamburMascotasHigieneAccesoriosGatos: MenuHamburMascotasHigieneAccesoriosGatos
    menuHamburMundoBebeVerTodos: MenuHamburMundoBebeVerTodos
    menuHamburMundoBebeAlimentoBebe: MenuHamburMundoBebeAlimentoBebe
    menuHamburMundoBebeDespuesBanio: MenuHamburMundoBebeDespuesBanio
    menuHamburMundoBebePaniales: MenuHamburMundoBebePaniales
    menuHamburMundoBebeParaElBanio: MenuHamburMundoBebeParaElBanio
    menuHamburMundoBebeToallitasHumedas: MenuHamburMundoBebeToallitasHumedas
    menuHamburPanaderiaVerTodos: MenuHamburPanaderiaVerTodos
    menuHamburPanaderiaPanRalladoRebozadores: MenuHamburPanaderiaPanRalladoRebozadores
    menuHamburPanaderiaPanificados: MenuHamburPanaderiaPanificados
    menuHamburPerfumeriaVerTodos: MenuHamburPerfumeriaVerTodos
    menuHamburPerfumeriaAlgodonesHisopos: MenuHamburPerfumeriaAlgodonesHisopos
    menuHamburPerfumeriaAntitranspirantesDesodorantes: MenuHamburPerfumeriaAntitranspirantesDesodorantes
    menuHamburPerfumeriaCuidadoCorporal: MenuHamburPerfumeriaCuidadoCorporal
    menuHamburPerfumeriaCuidadoPiel: MenuHamburPerfumeriaCuidadoPiel
    menuHamburPerfumeriaCuidadoDelCabello: MenuHamburPerfumeriaCuidadoDelCabello
    menuHamburPerfumeriaCuidadoDental: MenuHamburPerfumeriaCuidadoDental
    menuHamburPerfumeriaFarmacia: MenuHamburPerfumeriaFarmacia
    menuHamburPerfumeriaJabones: MenuHamburPerfumeriaJabones
    menuHamburPerfumeriaProteccionFemenina: MenuHamburPerfumeriaProteccionFemenina
    menuHamburPerfumeriaProteccionAdultos: MenuHamburPerfumeriaProteccionAdultos
    menuHamburPerfumeriaRepelentes: MenuHamburPerfumeriaRepelentes
    menuHamburOfertasVerTodos: MenuHamburOfertasVerTodos
    menuHamburOfertas: MenuHamburOfertas
    menuHamburOfertasEspecialesDelDia: MenuHamburOfertasEspecialesDelDia
    headerElegiFormaEntrega: HeaderElegiFormaEntrega
    headerFolletos: HeaderFolletos
    headerSucursales: HeaderSucursales
    folletosSelectProvinciaLocalidad: FolletosSelectProvinciaLocalidad
    folletosSelectProvinciaLocalidadAvellaneda: FolletosSelectProvinciaLocalidadAvellaneda
    folletosSelectProvinciaLocalidadBurzaco: FolletosSelectProvinciaLocalidadBurzaco
    folletosSelectProvinciaLocalidadEscobar: FolletosSelectProvinciaLocalidadEscobar
    folletosSelectProvinciaLocalidadEzpeleta: FolletosSelectProvinciaLocalidadEzpeleta
    folletosSelectProvinciaLocalidadItuzaingo: FolletosSelectProvinciaLocalidadItuzaingo
    folletosSelectProvinciaLocalidadJoseCPaz: FolletosSelectProvinciaLocalidadJoseCPaz
    folletosSelectProvinciaLocalidadJoseLeonSuarez: FolletosSelectProvinciaLocalidadJoseLeonSuarez
    folletosSelectProvinciaLocalidadLaferrere: FolletosSelectProvinciaLocalidadLaferrere
    folletosSelectProvinciaLocalidadLomaHermosa: FolletosSelectProvinciaLocalidadLomaHermosa
    folletosSelectProvinciaLocalidadLomasDeZamora: FolletosSelectProvinciaLocalidadLomasDeZamora
    folletosSelectProvinciaLocalidadMoreno: FolletosSelectProvinciaLocalidadMoreno
    folletosSelectProvinciaLocalidadPilar: FolletosSelectProvinciaLocalidadPilar
    folletosSelectProvinciaLocalidadSanVicente: FolletosSelectProvinciaLocalidadSanVicente
    folletosSelectProvinciaLocalidadTandil: FolletosSelectProvinciaLocalidadTandil
    folletosSelectProvinciaLocalidadTemperley: FolletosSelectProvinciaLocalidadTemperley
    folletosSelectProvinciaLocalidadTigre: FolletosSelectProvinciaLocalidadTigre
    folletosSelectProvinciaLocalidadTortuguitas: FolletosSelectProvinciaLocalidadTortuguitas
    folletosSelectProvinciaLocalidadCatamarca: FolletosSelectProvinciaLocalidadCatamarca
    folletosSelectProvinciaLocalidadChaco: FolletosSelectProvinciaLocalidadChaco
    folletosSelectProvinciaLocalidadCordoba: FolletosSelectProvinciaLocalidadCordoba
    folletosSelectProvinciaLocalidadMendoza: FolletosSelectProvinciaLocalidadMendoza
    folletosSelectProvinciaLocalidadEntreRios: FolletosSelectProvinciaLocalidadEntreRios
    folletosSelectProvinciaLocalidadJujuy: FolletosSelectProvinciaLocalidadJujuy

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







    // HEADER
    headerElegiFormaEntrega: async ({ page, context }, use) => {
        await use(new HeaderElegiFormaEntrega(page, context, environment))
    },
    headerFolletos: async ({ page, context }, use) => {
        await use(new HeaderFolletos(page, context, environment))
    },
    headerSucursales: async ({ page, context }, use) => {
        await use(new HeaderSucursales(page, context, environment))
    },

    // FOLLETOS
    folletosSelectProvinciaLocalidad: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidad(page, context, environment))
    },
    folletosSelectProvinciaLocalidadAvellaneda: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadAvellaneda(page, context, environment))
    },
    folletosSelectProvinciaLocalidadBurzaco: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadBurzaco(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEscobar: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEscobar(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEzpeleta: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEzpeleta(page, context, environment))
    },
    folletosSelectProvinciaLocalidadItuzaingo: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadItuzaingo(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJoseCPaz: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJoseCPaz(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJoseLeonSuarez: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJoseLeonSuarez(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLaferrere: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLaferrere(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLomaHermosa: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLomaHermosa(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLomasDeZamora: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLomasDeZamora(page, context, environment))
    },
    folletosSelectProvinciaLocalidadMoreno: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadMoreno(page, context, environment))
    },
    folletosSelectProvinciaLocalidadPilar: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadPilar(page, context, environment))
    },
    folletosSelectProvinciaLocalidadSanVicente: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadSanVicente(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTandil: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTandil(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTemperley: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTemperley(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTigre: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTigre(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTortuguitas: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTortuguitas(page, context, environment))
    },
    folletosSelectProvinciaLocalidadCatamarca: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadCatamarca(page, context, environment))
    },
    folletosSelectProvinciaLocalidadChaco: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadChaco(page, context, environment))
    },
    folletosSelectProvinciaLocalidadCordoba: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadCordoba(page, context, environment))
    },
    folletosSelectProvinciaLocalidadMendoza: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadMendoza(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEntreRios: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEntreRios(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJujuy: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJujuy(page, context, environment))
    },


    // MENU HAMBURGUESA
    menuHamburguesa: async ({ page, context }, use) => {
        await use(new MenuHamburguesa(page, context, environment))
    },
    menuHamburOfertas: async ({ page, context }, use) => {
        await use(new MenuHamburOfertas(page, context, environment))
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

    // MENU HAMBURGUESA - OFERTAS
    menuHamburOfertasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburOfertasVerTodos(page, context, environment))
    },
    menuHamburOfertasEspecialesDelDia: async ({ page, context }, use) => {
        await use(new MenuHamburOfertasEspecialesDelDia(page, context, environment))
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

    // MENU HAMBURGUESA - DESAYUNO Y MERIENDA
    menuHamburDesayunoMeriendaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaVerTodo(page, context, environment))
    },
    menuHamburDesayunoMeriendaAzucarEndulzantes: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaAzucarEndulzantes(page, context, environment))
    },
    menuHamburDesayunoMeriendaBudinesMagdalenas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBudinesMagdalenas(page, context, environment))
    },
    menuHamburDesayunoMeriendaCafe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCafe(page, context, environment))
    },
    menuHamburDesayunoMeriendaCerealesBarritas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCerealesBarritas(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas(page, context, environment))
    },
    menuHamburDesayunoMeriendaInfusiones: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaInfusiones(page, context, environment))
    },
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMermeladasOtrosDulces(page, context, environment))
    },
    menuHamburDesayunoMeriendaYerba: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaYerba(page, context, environment))
    },

    // MENU HAMBURGUESA - LACTEOS Y PRODUCTOS FRESCOS
    menuHamburLacteosProdsFrescosVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosVerTodo(page, context, environment))
    },
    menuHamburLacteosProdsFrescosDulceDeLeche: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosDulceDeLeche(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLeches: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLeches(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesPolvoYLargaVida: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida(page, context, environment))
    },
    menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras(page, context, environment))
    },
    menuHamburLacteosProdsFrescosPAS: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosPAS(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesos(page, context, environment))
    },
    menuHamburLacteosProdsFrescosSeco: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosSeco(page, context, environment))
    },

    // MENU HAMBURGUESA - LIMPIEZA
    menuHamburLimpiezaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaVerTodo(page, context, environment))
    },
    menuHamburLimpiezaArticulosLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaArticulosLimpieza(page, context, environment))
    },
    menuHamburLimpiezaDesodorantesAmbiente: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDesodorantesAmbiente(page, context, environment))
    },
    menuHamburLimpiezaInsecticidas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaInsecticidas(page, context, environment))
    },
    menuHamburLimpiezaLavandinas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLavandinas(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaBanio: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaBanio(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaCocina: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaCocina(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaPisosMuebles: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaPisosMuebles(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaRopa: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaRopa(page, context, environment))
    },
    menuHamburLimpiezaPapelesHigienicos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPapelesHigienicos(page, context, environment))
    },
    menuHamburLimpiezaRollosCocinaServilletas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaRollosCocinaServilletas(page, context, environment))
    },

    // MENU HAMBURGUESA - MASCOTAS
    menuHamburMascotasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasVerTodos(page, context, environment))
    },
    menuHamburMascotasAlimentosGatos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasAlimentosGatos(page, context, environment))
    },
    menuHamburMascotasAlimentosSnacksPerros: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasAlimentosSnacksPerros(page, context, environment))
    },
    menuHamburMascotasHigieneAccesoriosGatos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasHigieneAccesoriosGatos(page, context, environment))
    },

    // MENU HAMBURGUESA - MUNDO BEBE
    menuHamburMundoBebeVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeVerTodos(page, context, environment))
    },
    menuHamburMundoBebeAlimentoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeAlimentoBebe(page, context, environment))
    },
    menuHamburMundoBebeDespuesBanio: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeDespuesBanio(page, context, environment))
    },
    menuHamburMundoBebePaniales: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebePaniales(page, context, environment))
    },
    menuHamburMundoBebeParaElBanio: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeParaElBanio(page, context, environment))
    },
    menuHamburMundoBebeToallitasHumedas: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeToallitasHumedas(page, context, environment))
    },

    // MENU HAMBURGUESA - PANADERIA
    menuHamburPanaderiaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaVerTodos(page, context, environment))
    },
    menuHamburPanaderiaPanRalladoRebozadores: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanRalladoRebozadores(page, context, environment))
    },
    menuHamburPanaderiaPanificados: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanificados(page, context, environment))
    },

    // MENU HAMBURGUESA - PERFUMERIA
    menuHamburPerfumeriaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaVerTodos(page, context, environment))
    },
    menuHamburPerfumeriaAlgodonesHisopos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaAlgodonesHisopos(page, context, environment))
    },
    menuHamburPerfumeriaAntitranspirantesDesodorantes: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaAntitranspirantesDesodorantes(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoCorporal: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoCorporal(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoPiel: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoPiel(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoDelCabello: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoDelCabello(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoDental: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoDental(page, context, environment))
    },
    menuHamburPerfumeriaFarmacia: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaFarmacia(page, context, environment))
    },
    menuHamburPerfumeriaJabones: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaJabones(page, context, environment))
    },
    menuHamburPerfumeriaProteccionFemenina: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaProteccionFemenina(page, context, environment))
    },
    menuHamburPerfumeriaProteccionAdultos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaProteccionAdultos(page, context, environment))
    },
    menuHamburPerfumeriaRepelentes: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaRepelentes(page, context, environment))
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
