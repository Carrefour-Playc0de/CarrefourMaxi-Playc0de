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

test('@Regression @MenuHamburguesa (B2C-TC-1083) Verificar que funciona el Menu Bazar y Textil: VER TODO', async ({menuHamburBazarTextilVerTodo}) => {

    await test.step('Click en Bazar y Textil VER TODO', async () => {
        await menuHamburBazarTextilVerTodo.navigateToMenuHamburBazarTextilVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-697) Verificar que funciona el Menu Bazar y Textil: Automotor', async ({menuHamburBazarTextilAutomotor}) => {

    await test.step('Click en Automotor', async () => {
        await menuHamburBazarTextilAutomotor.navigateToMenuHamburBazarTextilAutomotor()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-687) Verificar que funciona el Menu Bazar y Textil: Cocina y Comedor', async ({menuHamburBazarTextilCocinaComedor}) => {

    await test.step('Click en Cocina y Comedor', async () => {
        await menuHamburBazarTextilCocinaComedor.navigateToMenuHamburBazarTextilCocinaComedor()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-718) Verificar que funciona el Menu Bazar y Textil: Deco y Organizacion', async ({menuHamburBazarTextilDecoOrganizacion}) => {

    await test.step('Click en Deco y Organizacion', async () => {
        await menuHamburBazarTextilDecoOrganizacion.navigateToMenuHamburBazarTextilDecoOrganizacion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-751) Verificar que funciona el Menu Bazar y Textil: Ferreteria y Pintura', async ({menuHamburBazarTextilFerreteriaPintura}) => {

    await test.step('Click en Ferreteria y Pintura', async () => {
        await menuHamburBazarTextilFerreteriaPintura.navigateToMenuHamburBazarTextilFerreteriaPintura()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-735) Verificar que funciona el Menu Bazar y Textil: Librerias', async ({menuHamburBazarTextilLibreria}) => {

    await test.step('Click en Librerias', async () => {
        await menuHamburBazarTextilLibreria.navigateToMenuHamburBazarTextilLibreria()
    })
})
