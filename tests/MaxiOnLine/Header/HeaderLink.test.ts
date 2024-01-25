import test from '../../../config/testManager'

test.beforeEach(async ({ cerrarModalTeDamosBienvenida }) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
})

test('@Regression @Header (TS-31) Verificar que al clickear ELEGI LA FORMA DE ENTREGA en el header funciona correctamente', async ({headerElegiFormaEntrega}) => {

    await test.step('Click en ELEGI LA FORMA DE ENTREGA', async () => {
        await headerElegiFormaEntrega.navigateToHeaderElegiFormaEntrega()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear Folletos en el header funciona correctamente', async ({headerFolletos}) => {

    await test.step('Click en Folletos', async () => {
        await headerFolletos.navigateToHeaderFolletos()
    })
})
test('@Regression @Header (TS-31) Verificar que al clickear Sucursales en el header funciona correctamente', async ({headerSucursales}) => {

    await test.step('Click en Sucursales', async () => {
        await headerSucursales.navigateToHeaderSucursales()
    })
})
