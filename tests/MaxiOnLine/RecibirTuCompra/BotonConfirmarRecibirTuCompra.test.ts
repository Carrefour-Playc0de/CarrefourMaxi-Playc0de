import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta, botonRetiroEnSucursal}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
    await test.step('Click en boton Retiro en Sucursal', async () => {
        await botonRetiroEnSucursal.navigateToBotonRetiroEnSucursal()
    })
})

test('@Smoke @Regression @Login (TS-03) Verificar que al clickear el boton CONFIRMAR en el modal Como queres recibir tu compra funciona correctamente', async ({botonConfirmarRecibirTuCompra}) => {

    await test.step('Click en el boton CONFIRMAR en el modal Como queres recibir tu compra', async () => {
        await botonConfirmarRecibirTuCompra.navigateToBotonConfirmarRecibirTuCompra()
    })
})