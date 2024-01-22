import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburLimpieza}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Limpieza', async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})

test('@Test @Regression @MenuHamburguesa (B2C-TC-1112) Verificar que funciona el Menu Mascotas: VER TODO', async ({menuHamburMascotasVerTodos}) => {

    await test.step('Click en Mascotas VER TODO', async () => {
        await menuHamburMascotasVerTodos.clickMascotasVerTodos()
    })
})
