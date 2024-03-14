import test from '../../../config/testManager'

test.beforeEach(async ({ navigateMaxiCarrefour }) => {
    await test.step('Navegar en maxi.carrefour.com.ar', async () => {
        await navigateMaxiCarrefour.MainPageMaxiCarrefour();
    })
})

test('@Regression @MaxiHeader (B2B-TC-264) Verificar que al clickear el boton Folletos del header de Maxi funciona correctamente', async ({maxiHeaderFolletosButton}) => {

    await test.step('Click en Folletos', async () => {
        await maxiHeaderFolletosButton.clickMaxiHeaderFolletosButton()
    })
})
test('@Regression @MaxiHeader (B2B-TC-265) Verificar que al clickear el boton Sucursales del header de Maxi funciona correctamente', async ({maxiHeaderSucursalesButton}) => {

    await test.step('Click en Sucursales', async () => {
        await maxiHeaderSucursalesButton.clickMaxiHeaderSucursalesButton()
    })
})
test('@Regression @MaxiHeader (B2B-TC-266) Verificar que al clickear el boton Quiero Folleto del header de Maxi funciona correctamente', async ({maxiHeaderQuieroFolletoButton}) => {

    await test.step('Click en Quiero Folleto', async () => {
        await maxiHeaderQuieroFolletoButton.clickMaxiHeaderQuieroFolletoButton()
    })
})
test('@Regression @MaxiHeader (B2B-TC-267) Verificar que al clickear el boton Quiero Terminal de Cobro del header de Maxi funciona correctamente', async ({maxiHeaderQuieroTerminalCobroButton}) => {

    await test.step('Click en Quiero Terminal de Cobro', async () => {
        await maxiHeaderQuieroTerminalCobroButton.clickMaxiHeaderQuieroTerminalCobroButton()
    })
})
test('@Regression @MaxiHeader (B2B-TC-268) Verificar que al clickear el boton Compra Online del header de Maxi funciona correctamente', async ({maxiHeaderCompraOnlineButton}) => {

    await test.step('Click en Compra Online', async () => {
        await maxiHeaderCompraOnlineButton.clickMaxiHeaderCompraOnlineButton()
    })
})
