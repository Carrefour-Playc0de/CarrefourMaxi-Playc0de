import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburDesayunoMerienda}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Desayuno y Merienda', async () => {
        await menuHamburDesayunoMerienda.navigateToMenuHamburDesayunoMerienda()
    })
})

test('@Smoke @Regression (B2B-TC-140) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: VER TODO', async ({menuHamburDesayunoMeriendaVerTodo}) => {

    await test.step('Click en ', async () => {
        await menuHamburDesayunoMeriendaVerTodo.navigateToMenuHamburDesayunoMeriendaVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-141) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Azucar y Endulzantes', async ({menuHamburDesayunoMeriendaAzucarEndulzantes}) => {

    await test.step('Click en Azucar y Endulzantes', async () => {
        await menuHamburDesayunoMeriendaAzucarEndulzantes.navigateToMenuHamburDesayunoMeriendaAzucarEndulzantes()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-142) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Budines y Magdalenas', async ({menuHamburDesayunoMeriendaBudinesMagdalenas}) => {

    await test.step('Click en Budines y Magdalenas', async () => {
        await menuHamburDesayunoMeriendaBudinesMagdalenas.navigateToMenuHamburDesayunoMeriendaBudinesMagdalenas()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-143) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Cafe', async ({menuHamburDesayunoMeriendaCafe}) => {

    await test.step('Click en Cafe', async () => {
        await menuHamburDesayunoMeriendaCafe.navigateToMenuHamburDesayunoMeriendaCafe()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-144) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Cereales y Barritas', async ({menuHamburDesayunoMeriendaCerealesBarritas}) => {

    await test.step('Click en Cereales y Barritas', async () => {
        await menuHamburDesayunoMeriendaCerealesBarritas.navigateToMenuHamburDesayunoMeriendaCerealesBarritas()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-145) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Galletitas Bizcochitos y Tostadas', async ({menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas}) => {

    await test.step('Click en Galletitas Bizcochitos y Tostadas', async () => {
        await menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas.navigateToMenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-146) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Infusiones', async ({menuHamburDesayunoMeriendaInfusiones}) => {

    await test.step('Click en Infusiones', async () => {
        await menuHamburDesayunoMeriendaInfusiones.navigateToMenuHamburDesayunoMeriendaInfusiones()
    })
})
test('@Regression @MenuHamburguesa B2B-TC-147) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Mermeladas y Otros Dulces', async ({menuHamburDesayunoMeriendaMermeladasOtrosDulces}) => {

    await test.step('Click en Mermeladas y Otros Dulces', async () => {
        await menuHamburDesayunoMeriendaMermeladasOtrosDulces.navigateToMenuHamburDesayunoMeriendaMermeladasOtrosDulces()
    })
})
test('@Regression @MenuHamburguesa (B2B-TC-148) Verificar que funciona correctamente al clickear en el Menu Desayuno y Merienda: Yerba', async ({menuHamburDesayunoMeriendaYerba}) => {

    await test.step('Click en Yerba', async () => {
        await menuHamburDesayunoMeriendaYerba.navigateToMenuHamburDesayunoMeriendaYerba()
    })
})
