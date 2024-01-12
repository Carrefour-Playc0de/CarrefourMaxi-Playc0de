import test from '../config/testManager'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/CerrarModalTeDamosBienvenida'

// We can use steps like this to reproduce Cucumber formatting

test('@Smoke @Regression @Login (B2CPROY-TC-1) Verificar que al clicker la X del modal Te Damos la Bienvenida funciona correctamente', async ({cerrarModalTeDamosBienvenida}) => {

    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })

})