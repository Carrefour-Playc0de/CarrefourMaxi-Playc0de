import test from '../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
})

test('@Regression @MenuHamburguesa (TS-31) Verificar al clickear el Menu Hamburguesa funciona correctamente', async ({menuHamburguesa}) => {

    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })

})