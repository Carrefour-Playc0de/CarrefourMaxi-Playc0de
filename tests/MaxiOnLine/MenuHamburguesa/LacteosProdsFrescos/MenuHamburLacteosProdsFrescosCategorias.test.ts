import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburLacteosProdsFrescos}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Lacteos y Productos Frescos', async () => {
        await menuHamburLacteosProdsFrescos.navigateToMenuHamburLacteosProdsFrescos()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-1116) Verificar que funciona el Menu Lacteos y Productos Frescos: VER TODO', async ({menuHamburLacteosProdsFrescosVerTodo}) => {

    await test.step('Click en Lacteos y Productos Frescos VER TODO', async () => {
        await menuHamburLacteosProdsFrescosVerTodo.navigateToMenuHamburLacteosProdsFrescosVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-990) Verificar que funciona el Menu Lacteos y Productos Frescos: Dulce de Leche', async ({menuHamburLacteosProdsFrescosDulceDeLeche}) => {

    await test.step('Click en Dulce de Leche', async () => {
        await menuHamburLacteosProdsFrescosDulceDeLeche.navigateToMenuHamburLacteosProdsFrescosDulceDeLeche()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-330) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches', async ({menuHamburLacteosProdsFrescosLeches}) => {

    await test.step('Click en Leches', async () => {
        await menuHamburLacteosProdsFrescosLeches.navigateToMenuHamburLacteosProdsFrescosLeches()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-985) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches en Polvo y Larga Vida', async ({menuHamburLacteosProdsFrescosLechesPolvoYLargaVida}) => {

    await test.step('Click en Leches en Polvo y Larga Vida', async () => {
        await menuHamburLacteosProdsFrescosLechesPolvoYLargaVida.navigateToMenuHamburLacteosProdsFrescosLechesPolvoYLargaVida()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-989) Verificar que funciona el Menu Lacteos y Productos Frescos: Mantecas Margarinas y Levaduras', async ({menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras}) => {

    await test.step('Click en Mantecas Margarinas y Levaduras', async () => {
        await menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras.navigateToMenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-992) Verificar que funciona el Menu Lacteos y Productos Frescos: P.A.S.', async ({menuHamburLacteosProdsFrescosPAS}) => {

    await test.step('Click en P.A.S.', async () => {
        await menuHamburLacteosProdsFrescosPAS.navigateToMenuHamburLacteosProdsFrescosPAS()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-997) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos', async ({menuHamburLacteosProdsFrescosQuesos}) => {

    await test.step('Click en Quesos', async () => {
        await menuHamburLacteosProdsFrescosQuesos.navigateToMenuHamburLacteosProdsFrescosQuesos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-987) Verificar que funciona el Menu Lacteos y Productos Frescos: Seco', async ({menuHamburLacteosProdsFrescosSeco}) => {

    await test.step('Click en Seco', async () => {
        await menuHamburLacteosProdsFrescosSeco.navigateToMenuHamburLacteosProdsFrescosSeco()
    })
})
