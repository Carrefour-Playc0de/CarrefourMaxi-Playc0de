import test from '../../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida, headerFolletos, folletosSelectProvinciaLocalidad }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
})

test('@Regression @Header (TS-31) Verificar que al clickear el boton Folletos del header en Folletos o Sucursal funciona correctamente', async ({headerHBFSFolletosButton}) => {

    await test.step('Click en el boton Folletos del header', async () => {
        await headerHBFSFolletosButton.navigateToHeaderHBFSFolletosButton()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear el boton Sucursales del header en Folletos o Sucursal funciona correctamente', async ({headerHBFSSucursalesButton}) => {

    await test.step('Click en el boton Sucursales del header', async () => {
        await headerHBFSSucursalesButton.navigateToHeaderHBFSSucursalesButton()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear el boton Quiero Folleto del header en Folletos o Sucursal funciona correctamente', async ({headerHBFSQuieroFolletoButton}) => {

    await test.step('Click en el boton Quiero Folleto del header', async () => {
        await headerHBFSQuieroFolletoButton.navigateToHeaderHBFSQuieroFolletoButton()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear el boton Quiero Terminal de Cobro del header en Folletos o Sucursal funciona correctamente', async ({headerHBFSQuieroTerminalCobroButton}) => {

    await test.step('Click en el boton Quiero Terminal de Cobro del header', async () => {
        await headerHBFSQuieroTerminalCobroButton.navigateToHeaderHBFSQuieroTerminalCobroButton()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear el boton Compra Online del header en Folletos o Sucursal funciona correctamente', async ({headerHBFSCompraOnlineButton}) => {

    await test.step('Click en el boton Compra Online del header', async () => {
        await headerHBFSCompraOnlineButton.navigateToHeaderHBFSCompraOnlineButton()
    })
})












