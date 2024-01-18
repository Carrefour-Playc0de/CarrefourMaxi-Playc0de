import test from '../config/testManager'

test('@Smoke @Regression (TS-01) Verificar que al clickear la X del modal Te Damos la Bienvenida funciona correctamente', async ({cerrarModalTeDamosBienvenida}) => {

    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })

})