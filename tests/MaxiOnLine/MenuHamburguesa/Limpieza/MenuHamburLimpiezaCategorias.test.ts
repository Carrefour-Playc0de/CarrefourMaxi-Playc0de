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

test('@Test @Regression @MenuHamburguesa (B2C-TC-1111) Verificar que funciona el Menu Limpieza: VER TODO', async ({menuHamburLimpiezaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburLimpiezaVerTodo.navigateToMenuHamburLimpiezaVerTodo()
    })
})
// test('@Test @Regression @MenuHamburguesa (B2C-TC-335) Verificar que funciona el Menu Limpieza: Limpieza de la Ropa', async ({menuHamburLimpiezaLimpiezaDeRopa}) => {
//
//     await test.step('Click en Limpieza de la Ropa', async () => {
//         await menuHamburLimpiezaLimpiezaDeRopa.clickLimpiezaLimpiezaDeRopa()
//     })
// })
