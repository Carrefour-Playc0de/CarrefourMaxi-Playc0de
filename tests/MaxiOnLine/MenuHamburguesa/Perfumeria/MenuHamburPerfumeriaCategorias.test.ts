import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburPerfumeria}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Perfumería', async () => {
        await menuHamburPerfumeria.navigateToMenuHamburPerfumeria()
    })
})

test('@Smoke @Regression () Verificar que funciona correctamente al clickear en el Menu Perfumería: VER TODO', async ({menuHamburPerfumeriaVerTodos}) => {

    await test.step('Click en Perfumería VER TODO', async () => {
        await menuHamburPerfumeriaVerTodos.navigateToMenuHamburPerfumeriaVerTodos()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Algodones e Hisopos', async ({menuHamburPerfumeriaAlgodonesHisopos}) => {

    await test.step('Click en Algodones e Hisopos', async () => {
        await menuHamburPerfumeriaAlgodonesHisopos.navigateToMenuHamburPerfumeriaAlgodonesHisopos()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Antitranspirantes y Desodorantes', async ({menuHamburPerfumeriaAntitranspirantesDesodorantes}) => {

    await test.step('Click en Antitranspirantes y Desodorantes', async () => {
        await menuHamburPerfumeriaAntitranspirantesDesodorantes.navigateToMenuHamburPerfumeriaAntitranspirantesDesodorantes()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Cuidado Corporal', async ({menuHamburPerfumeriaCuidadoCorporal}) => {

    await test.step('Click en Cuidado Corporal', async () => {
        await menuHamburPerfumeriaCuidadoCorporal.navigateToMenuHamburPerfumeriaCuidadoCorporal()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Cuidado de la Piel', async ({menuHamburPerfumeriaCuidadoPiel}) => {

    await test.step('Click en Cuidado de la Piel', async () => {
        await menuHamburPerfumeriaCuidadoPiel.navigateToMenuHamburPerfumeriaCuidadoPiel()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Cuidado del Cabello', async ({menuHamburPerfumeriaCuidadoDelCabello}) => {

    await test.step('Click en Cuidado del Cabello', async () => {
        await menuHamburPerfumeriaCuidadoDelCabello.navigateToMenuHamburPerfumeriaCuidadoDelCabello()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Cuidado Dental', async ({menuHamburPerfumeriaCuidadoDental}) => {

    await test.step('Click en Cuidado Dental', async () => {
        await menuHamburPerfumeriaCuidadoDental.navigateToMenuHamburPerfumeriaCuidadoDental()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Farmacia', async ({menuHamburPerfumeriaFarmacia}) => {

    await test.step('Click en Farmacia', async () => {
        await menuHamburPerfumeriaFarmacia.navigateToMenuHamburPerfumeriaFarmacia()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Jabones', async ({menuHamburPerfumeriaJabones}) => {

    await test.step('Click en Jabones', async () => {
        await menuHamburPerfumeriaJabones.navigateToMenuHamburPerfumeriaJabones()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Proteccion Femenina', async ({menuHamburPerfumeriaProteccionFemenina}) => {

    await test.step('Click en Proteccion Femenina', async () => {
        await menuHamburPerfumeriaProteccionFemenina.navigateToMenuHamburPerfumeriaProteccionFemenina()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Proteccion para Adultos', async ({menuHamburPerfumeriaProteccionAdultos}) => {

    await test.step('Click en Proteccion para Adultos', async () => {
        await menuHamburPerfumeriaProteccionAdultos.navigateToMenuHamburPerfumeriaProteccionAdultos()
    })
})
test('@Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Perfumería: Repelentes', async ({menuHamburPerfumeriaRepelentes}) => {

    await test.step('Click en Repelentes', async () => {
        await menuHamburPerfumeriaRepelentes.navigateToMenuHamburPerfumeriaRepelentes()
    })
})
