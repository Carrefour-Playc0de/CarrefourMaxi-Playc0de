import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburOfertas}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Ofertas', async () => {
        await menuHamburOfertas.navigateToMenuHamburOfertas()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1115) Verificar que funciona el Menu Ofertas: VER TODO', async ({menuHamburOfertasVerTodos}) => {

    await test.step('Click en Ofertas VER TODO', async () => {
        await menuHamburOfertasVerTodos.navigateToMenuHamburOfertasVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1023) Verificar que funciona el Menu Ofertas: ESPECIALES DEL DIA', async ({menuHamburOfertasEspecialesDelDia}) => {

    await test.step('Click en ESPECIALES DEL DIA', async () => {
        await menuHamburOfertasEspecialesDelDia.navigateToMenuHamburOfertasEspecialesDelDia()
    })
})
