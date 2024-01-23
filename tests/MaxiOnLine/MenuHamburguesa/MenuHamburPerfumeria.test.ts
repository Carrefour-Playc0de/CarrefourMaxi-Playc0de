import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.clickMenuHamburguesa()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1110) Verificar que al clickear en Menu Perfumería funciona correctamente', async ({menuHamburPerfumeria}) => {

    await test.step('Click en Perfumería', async () => {
        await menuHamburPerfumeria.navigateToMenuHamburPerfumeria()
    })
})
