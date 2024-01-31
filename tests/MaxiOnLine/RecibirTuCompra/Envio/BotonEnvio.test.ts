import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
})

test('@Test @Smoke @Regression @Login (TS-03) Verificar que al clickear el boton Envio funciona correctamente', async ({botonEnvio}) => {

    await test.step('Click en el boton Envio', async () => {
        await botonEnvio.navigateToBotonEnvio()
    })
})