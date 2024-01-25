import test from '../../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida, headerFolletos }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
})

test('@Test @Regression @Header (TS-31) Verificar que el select Provincia o Localidad y sus opciones  funciona correctamente', async ({folletosSelectProvinciaLocalidad}) => {

    // await test.step('Click en el select Provincia o Localidad', async () => {
    //     await folletosSelectProvinciaLocalidad.clickSelectProvinciaLocalidad()
    // })
    //
    // await test.step('Click en Avellaneda', async () => {
    //     await folletosSelectProvinciaLocalidad.clickSelectProvinciaLocalidadAvellaneda()
    // })

    await test.step('Click en el select Provincia o Localidad', async () => {
        await folletosSelectProvinciaLocalidad.navigateToFolletosSelectProvinciaLocalidad()
    })
})
