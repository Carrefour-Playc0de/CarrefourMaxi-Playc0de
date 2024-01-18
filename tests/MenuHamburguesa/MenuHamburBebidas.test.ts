import test from '../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.clickMenuHamburguesa()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1081) Verificar que al clickear en Menu Bebidas funciona correctamente', async ({menuHamburBebidas}) => {

    await test.step('Click en Bebidas', async () => {
        await menuHamburBebidas.clickBebidas()
    })
})