import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta, botonRetiroEnSucursal, botonConfirmarRecibirTuCompra}) => {
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
})

test('@Smoke @Regression @Login (TS-05) Verificar que al clickear el select Sucursal que Arma Tu Pedido funciona correctamente', async ({selectSucursalArmaPedido}) => {

    await test.step('Click en el select Sucursal que Arma Tu Pedido', async () => {
        await selectSucursalArmaPedido.navigateToSelectSucursalArmaPedido()
    })
})