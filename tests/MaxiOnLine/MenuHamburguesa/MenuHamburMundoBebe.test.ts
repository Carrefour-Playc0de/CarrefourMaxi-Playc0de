import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1108) Verificar que al clickear en Menu Mundo Bebe funciona correctamente', async ({menuHamburMundoBebe}) => {

    await test.step('Click en Mundo Bebe', async () => {
        await menuHamburMundoBebe.navigateToMenuHamburMundoBebe()
    })
})