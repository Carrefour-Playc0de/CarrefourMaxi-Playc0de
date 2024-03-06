import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Smoke @Regression (B2B-TC-120) Verificar que al clickear en el Menu Bazar y Textil funciona correctamente', async ({menuHamburBazarTextil}) => {

    await test.step('Click en Bazar y Textil', async () => {
        await menuHamburBazarTextil.navigateToMenuHamburBazarTextil()
    })
})