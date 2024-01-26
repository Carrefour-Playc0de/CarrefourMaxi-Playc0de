import test from '../../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida, headerFolletos, folletosSelectProvinciaLocalidad }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
    await test.step('Click en el select Provincia o Localidad', async () => {
        await folletosSelectProvinciaLocalidad.navigateToFolletosSelectProvinciaLocalidad()
    })
})

test('@Test @Regression @Header (TS-31) Verificar que al clickear en la opcion Ezpeleta del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadEzpeleta}) => {

    await test.step('Click en la opcion Ezpeleta', async () => {
        await folletosSelectProvinciaLocalidadEzpeleta.navigateToFolletosSelectProvinciaLocalidadEzpeleta()
    })
})
