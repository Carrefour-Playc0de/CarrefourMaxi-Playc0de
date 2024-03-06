import test from '../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
})

test('@Smoke @Regression @Login (B2B-TC-106) Verificar que al clickear el icono Ingresar se direcciona correctamente', async ({ingresarCuenta}) => {

    await test.step('Click en el icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
})