import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Smoke @Regression () Verificar que al clickear en Menu Mascotas funciona correctamente', async ({menuHamburMascotas}) => {

    await test.step('Click en Mascotas', async () => {
        await menuHamburMascotas.navigateToMenuHamburMascotas()
    })
})