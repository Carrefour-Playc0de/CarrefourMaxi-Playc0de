import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta, botonRetiroEnSucursal, botonConfirmarRecibirTuCompra, selectProvincia, selectProvinciaBsAsNorte, selectSucursalArmaPedido, selectSucursalArmaPedidoCAMPANAColectoraNorte1647}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
    await test.step('Click en boton Retiro en Sucursal', async () => {
        await botonRetiroEnSucursal.navigateToBotonRetiroEnSucursal()
    })
    await test.step('Click en el boton CONFIRMAR en el modal Como queres recibir tu compra', async () => {
        await botonConfirmarRecibirTuCompra.navigateToBotonConfirmarRecibirTuCompra()
    })
    await test.step('Click en el select Provincia', async () => {
        await selectProvincia.navigateToSelectProvincia()
    })
    await test.step('Click en el select Provincia en BS AS (NORTE)', async () => {
        await selectProvinciaBsAsNorte.navigateToSelectProvinciaBsAsNorte()
    })
    await test.step('Click en el select Sucursal que Arma Tu Pedido', async () => {
        await selectSucursalArmaPedido.navigateToSelectSucursalArmaPedido()
    })
    await test.step('Click en CAMPANA Colectora Norte 1647', async () => {
        await selectSucursalArmaPedidoCAMPANAColectoraNorte1647.navigateToSelectSucursalArmaPedidoCAMPANAColectoraNorte1647()
    })
})

test('@Test @Retiro @Regression (TS-29) Verificar que al clickear el boton CONFIRMAR del modal Sucursal funciona correctamente', async ({botonConfirmar}) => {

    await test.step('Click en boton CONFIRMAR', async () => {
        await botonConfirmar.navigateToBotonConfirmar()
    })
})










