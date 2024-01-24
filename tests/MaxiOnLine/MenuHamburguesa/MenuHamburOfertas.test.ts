import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Regression @MenuHamburguesa (TS-31) Verificar que al clickear en Menu Ofertas funciona correctamente', async ({menuHamburOfertas}) => {

    await test.step('Click en Ofertas', async () => {
        await menuHamburOfertas.navigateToMenuHamburOfertas()
    })
})