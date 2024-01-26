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

test('@Test @Regression @Header (TS-31) Verificar que al clickear en la opcion Chaco del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadChaco}) => {

    await test.step('Click en la opcion Chaco', async () => {
        await folletosSelectProvinciaLocalidadChaco.navigateToFolletosSelectProvinciaLocalidadChaco()
    })
})
