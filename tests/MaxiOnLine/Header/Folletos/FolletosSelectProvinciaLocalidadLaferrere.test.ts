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

test('@Regression @Header (TS-31) Verificar que al clickear en la opcion Laferrere del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadLaferrere}) => {

    await test.step('Click en la opcion Laferrere', async () => {
        await folletosSelectProvinciaLocalidadLaferrere.navigateToFolletosSelectProvinciaLocalidadLaferrere()
    })
})
