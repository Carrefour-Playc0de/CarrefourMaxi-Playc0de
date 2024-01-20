import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.clickMenuHamburguesa()
    })
})

test('@Regression @MenuHamburguesa (TS-31) Verificar que al clickear en Menu Almacen funciona correctamente', async ({menuHamburAlmacen}) => {

    await test.step('Click en Almacen', async () => {
        await menuHamburAlmacen.navigateToMenuHamburAlmacen()
    })
})