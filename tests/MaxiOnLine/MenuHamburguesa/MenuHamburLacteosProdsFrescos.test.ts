import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Smoke @Regression (B2B-TC-149) Verificar que al clickear en el Menu Lacteos y Productos Frescos funciona correctamente', async ({menuHamburLacteosProdsFrescos}) => {

    await test.step('Click en Lacteos y Productos Frescos', async () => {
        await menuHamburLacteosProdsFrescos.navigateToMenuHamburLacteosProdsFrescos()
    })
})