import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburAlmacen}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Almacen', async () => {
        await menuHamburAlmacen.navigateToMenuHamburAlmacen()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1084) Verificar que funciona el Menu Almacen: VER TODO', async ({menuHamburAlmacenVerTodo}) => {

    await test.step('Click en Almacen VER TODO', async () => {
        await menuHamburAlmacenVerTodo.navigateToMenuHamburAlmacenVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-327) Verificar que funciona el Menu Almacen: Aceites y Vinagres', async ({menuHamburguesaAlmacenAceitesVinagres}) => {

    await test.step('Click en Aceites y Vinagres', async () => {
        await menuHamburguesaAlmacenAceitesVinagres.navigateToMenuHamburAlmacenAceitesVinagres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-874) Verificar que funciona el Menu Almacen: Arroz y Legumbres', async ({menuHamburAlmacenArrozLegumbres}) => {

    await test.step('Click en Arroz y Legumbres', async () => {
        await menuHamburAlmacenArrozLegumbres.navigateToMenuHamburAlmacenArrozLegumbres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-875) Verificar que funciona el Menu Almacen: Arroz', async ({menuHamburAlmacenArroz}) => {

    await test.step('Click en Arroz', async () => {
        await menuHamburAlmacenArroz.navigateToMenuHamburAlmacenArroz()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-896) Verificar que funciona el Menu Almacen: Caldos Sopas y Pure', async ({menuHamburAlmacenCaldosSopasPure}) => {

    await test.step('Click en Caldos Sopas y Pure', async () => {
        await menuHamburAlmacenCaldosSopasPure.navigateToMenuHamburAlmacenCaldosSopasPure()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-884) Verificar que funciona el Menu Almacen: Enlatados y Conservas', async ({menuHamburAlmacenEnlatadosConservas}) => {

    await test.step('Click en Enlatados y Conservas', async () => {
        await menuHamburAlmacenEnlatadosConservas.navigateToMenuHamburAlmacenEnlatadosConservas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-868) Verificar que funciona el Menu Almacen: Golosinas y Chocolates', async ({menuHamburAlmacenGolosinasChocolates}) => {

    await test.step('Click en Golosinas y Chocolates', async () => {
        await menuHamburAlmacenGolosinasChocolates.navigateToMenuHamburAlmacenGolosinasChocolates()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-878) Verificar que funciona el Menu Almacen: Harinas', async ({menuHamburAlmacenHarinas}) => {

    await test.step('Click en Harinas', async () => {
        await menuHamburAlmacenHarinas.navigateToMenuHamburAlmacenHarinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-870) Verificar que funciona el Menu Almacen: Pastas Secas', async ({menuHamburAlmacenPastasSecas}) => {

    await test.step('Click en Pastas Secas', async () => {
        await menuHamburAlmacenPastasSecas.navigateToMenuHamburAlmacenPastasSecas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-900) Verificar que funciona el Menu Almacen: Reposteria y Postres', async ({menuHamburAlmacenReposteriaPostres}) => {

    await test.step('Click en Reposteria y Postres', async () => {
        await menuHamburAlmacenReposteriaPostres.navigateToMenuHamburAlmacenReposteriaPostres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-891) Verificar que funciona el Menu Almacen: Sal Aderezos y Saborizadores', async ({menuHamburAlmacenSalAderezosSaborizadores}) => {

    await test.step('Click en Sal Aderezos y Saborizadores', async () => {
        await menuHamburAlmacenSalAderezosSaborizadores.navigateToMenuHamburAlmacenSalAderezosSaborizadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-907) Verificar que funciona el Menu Almacen: Snacks', async ({menuHamburAlmacenSnacks}) => {

    await test.step('Click en Snacks', async () => {
        await menuHamburAlmacenSnacks.navigateToMenuHamburAlmacenSnacks()
    })
})
