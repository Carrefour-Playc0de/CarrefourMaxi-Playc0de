import test from '../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.clickMenuHamburguesa()
    })
})

test('@Smoke @Regression @MenuHamburguesa(B2C-TC-1089) Verificar que al clickear en Menu Desayuno y Merienda funciona correctamente', async ({menuHamburDesayunoMerienda}) => {

    await test.step('Click en Desayuno y Merienda', async () => {
        await menuHamburDesayunoMerienda.clickDesayunoMerienda()
    })
})