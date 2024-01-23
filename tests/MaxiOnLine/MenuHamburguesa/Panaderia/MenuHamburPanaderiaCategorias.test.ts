import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburPanaderia}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Panaderia', async () => {
        await menuHamburPanaderia.navigateToMenuHamburPanaderia()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1115) Verificar que funciona el Menu Panaderia: VER TODO', async ({menuHamburPanaderiaVerTodos}) => {

    await test.step('Click en Panaderia VER TODO', async () => {
        await menuHamburPanaderiaVerTodos.navigateToMenuHamburPanaderiaVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1023) Verificar que funciona el Menu Panaderia: Pan Rallado y Rebozadores', async ({menuHamburPanaderiaPanRalladoRebozadores}) => {

    await test.step('Click en Pan Rallado y Rebozadores', async () => {
        await menuHamburPanaderiaPanRalladoRebozadores.navigateToMenuHamburPanaderiaPanRalladoRebozadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1018) Verificar que funciona el Menu Panaderia: Panificados', async ({menuHamburPanaderiaPanificados}) => {

    await test.step('Click en Panificados', async () => {
        await menuHamburPanaderiaPanificados.navigateToMenuHamburPanaderiaPanificados()
    })
})
