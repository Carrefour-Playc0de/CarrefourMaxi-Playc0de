import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Smoke @Regression (B2B-TC-185) Verificar que al clickear en Menu Panaderia funciona correctamente', async ({menuHamburPanaderia}) => {

    await test.step('Click en Panaderia', async () => {
        await menuHamburPanaderia.navigateToMenuHamburPanaderia()
    })
})
