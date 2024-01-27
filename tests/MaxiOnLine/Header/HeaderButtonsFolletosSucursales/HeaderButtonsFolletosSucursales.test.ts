import test from '../../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida, headerFolletos, folletosSelectProvinciaLocalidad }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
})

test('@Regression @Header (TS-31) Verificar que al clickear en la opcion Avellaneda del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadAvellaneda}) => {

    await test.step('Click en la opcion Avellaneda', async () => {
        await folletosSelectProvinciaLocalidadAvellaneda.navigateToFolletosSelectProvinciaLocalidadAvellaneda()
    })
})
