import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburBazarTextil}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Bazar y Textil`, async () => {
        await menuHamburBazarTextil.navigateToMenuHamburBazarTextil()
    })
})

test('@Smoke @Regression (B2B-TC-121) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: VER TODO', async ({menuHamburBazarTextilVerTodo}) => {

    await test.step('Click en Bazar y Textil VER TODO', async () => {
        await menuHamburBazarTextilVerTodo.navigateToMenuHamburBazarTextilVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-122) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: Automotor', async ({menuHamburBazarTextilAutomotor}) => {

    await test.step('Click en Automotor', async () => {
        await menuHamburBazarTextilAutomotor.navigateToMenuHamburBazarTextilAutomotor()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-123) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: Cocina y Comedor', async ({menuHamburBazarTextilCocinaComedor}) => {

    await test.step('Click en Cocina y Comedor', async () => {
        await menuHamburBazarTextilCocinaComedor.navigateToMenuHamburBazarTextilCocinaComedor()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-124) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: Deco y Organizacion', async ({menuHamburBazarTextilDecoOrganizacion}) => {

    await test.step('Click en Deco y Organizacion', async () => {
        await menuHamburBazarTextilDecoOrganizacion.navigateToMenuHamburBazarTextilDecoOrganizacion()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-125) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: Ferreteria y Pintura', async ({menuHamburBazarTextilFerreteriaPintura}) => {

    await test.step('Click en Ferreteria y Pintura', async () => {
        await menuHamburBazarTextilFerreteriaPintura.navigateToMenuHamburBazarTextilFerreteriaPintura()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-126) Verificar que funciona correctamente al clickear en el Menu Bazar y Textil: Librerias', async ({menuHamburBazarTextilLibreria}) => {

    await test.step('Click en Librerias', async () => {
        await menuHamburBazarTextilLibreria.navigateToMenuHamburBazarTextilLibreria()
    })
})
