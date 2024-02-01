import test from '../../../config/testManager'

test.beforeEach(async ({ navigateMaxiCarrefour }) => {
    await test.step('Navegar en maxi.carrefour.com.ar', async () => {
        await navigateMaxiCarrefour.MainPageMaxiCarrefour();
    })
})

test('@Regression @MaxiHeader (TS-31) Verificar que al clickear Folletos en el header de Maxi funciona correctamente', async ({maxiHeaderFolletosButton}) => {

    await test.step('Click en Folletos', async () => {
        await maxiHeaderFolletosButton.clickMaxiHeaderFolletosButton()
    })
})
test('@Regression @MaxiHeader (TS-31) Verificar que al clickear Sucursales en el header de Maxi funciona correctamente', async ({maxiHeaderSucursalesButton}) => {

    await test.step('Click en Sucursales', async () => {
        await maxiHeaderSucursalesButton.clickMaxiHeaderSucursalesButton()
    })
})
test('@Regression @MaxiHeader (TS-31) Verificar que al clickear Quiero Folleto en el header de Maxi funciona correctamente', async ({maxiHeaderQuieroFolletoButton}) => {

    await test.step('Click en Quiero Folleto', async () => {
        await maxiHeaderQuieroFolletoButton.clickMaxiHeaderQuieroFolletoButton()
    })
})
test('@Regression @MaxiHeader (TS-31) Verificar que al clickear Quiero Terminal de Cobro en el header de Maxi funciona correctamente', async ({maxiHeaderQuieroTerminalCobroButton}) => {

    await test.step('Click en Quiero Terminal de Cobro', async () => {
        await maxiHeaderQuieroTerminalCobroButton.clickMaxiHeaderQuieroTerminalCobroButton()
    })
})
test('@Regression @MaxiHeader (TS-31) Verificar que al clickear Compra Online en el header de Maxi funciona correctamente', async ({maxiHeaderCompraOnlineButton}) => {

    await test.step('Click en Compra Online', async () => {
        await maxiHeaderCompraOnlineButton.clickMaxiHeaderCompraOnlineButton()
    })
})
