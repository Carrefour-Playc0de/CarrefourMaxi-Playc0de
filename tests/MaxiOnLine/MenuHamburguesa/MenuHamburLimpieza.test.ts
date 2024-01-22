import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1105) Verificar que al clickear en Menu Limpieza funciona correctamente', async ({menuHamburLimpieza}) => {

    await test.step('Click en Limpieza', async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})
