import test from '../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
})

test('@Regression @Header (B2B-TC-261) Verificar que al clickear el link ELEGI LA FORMA DE ENTREGA en el header se direcciona correctamente', async ({headerElegiFormaEntrega}) => {

    await test.step('Click en ELEGI LA FORMA DE ENTREGA', async () => {
        await headerElegiFormaEntrega.navigateToHeaderElegiFormaEntrega()
    })
})
test('@Regression @Header (B2B-TC-262) Verificar que al clickear el link Folletos en el header se direcciona correctamente', async ({headerFolletos}) => {

    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
})
test('@Regression @Header (B2B-TC-263) Verificar que al clickear el link Sucursales en el header se direcciona correctamente', async ({headerSucursales}) => {

    await test.step('Click en Sucursales', async () => {
        await headerSucursales.navigateToHeaderSucursales()
    })
})
