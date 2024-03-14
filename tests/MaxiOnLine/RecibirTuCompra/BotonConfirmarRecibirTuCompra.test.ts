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

test('@Smoke @Regression @Login (B2B-TC-204) Verificar que al clickear el boton Retiro en Sucursal y luego el boton CONFIRMAR funciona correctamente', async ({botonRetiroEnSucursal}) => {

    await test.step('Click en el boton Retiro en Sucursal', async () => {
        await botonRetiroEnSucursal.navigateToBotonRetiroEnSucursal()
    })
})
test('@Smoke @Regression @Login (B2B-TC-205) Verificar que al clickear el boton Envio y luego el boton CONFIRMAR funciona correctamente', async ({botonEnvio}) => {

    await test.step('Click en el boton Envio', async () => {
        await botonEnvio.navigateToBotonEnvio()
    })
})

test.afterEach(async ({ botonConfirmarRecibirTuCompra }) => {

    await test.step('Click en el boton CONFIRMAR en el modal Como queres recibir tu compra', async () => {
        await botonConfirmarRecibirTuCompra.navigateToBotonConfirmarRecibirTuCompra()
    })
})