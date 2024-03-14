import test from '../../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta, botonRetiroEnSucursal, botonConfirmarRecibirTuCompra}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
    await test.step('Click en boton Retiro en Sucursal', async () => {
        await botonRetiroEnSucursal.navigateToBotonRetiroEnSucursal()
    })
    await test.step('Click en el boton CONFIRMAR en el modal Como queres recibir tu compra', async () => {
        await botonConfirmarRecibirTuCompra.navigateToBotonConfirmarRecibirTuCompra()
    })
})

test('@Smoke @Retiro @Regression (B2B-TC-206) Verificar que al clickear el select Provincia en BS AS (NORTE) funciona correctamente', async ({selectProvinciaBsAsNorte}) => {
    await test.step('Click en el select Provincia en BS AS (NORTE)', async () => {
        await selectProvinciaBsAsNorte.navigateToSelectProvinciaBsAsNorte()
    })
})
test('@Retiro @Regression (B2B-TC-207) Verificar que al clickear el select Provincia en BS AS (OESTE) funciona correctamente', async ({selectProvinciaBsAsOeste}) => {
    await test.step('Click en el select Provincia en BS AS (OESTE)', async () => {
        await selectProvinciaBsAsOeste.navigateToSelectProvinciaBsAsOeste()
    })
})
test('@Retiro @Regression (B2B-TC-208) Verificar que al clickear el select Provincia en BS AS (SUR) funciona correctamente', async ({selectProvinciaBsAsSur}) => {
    await test.step('Click en el select Provincia en BS AS (SUR)', async () => {
        await selectProvinciaBsAsSur.navigateToSelectProvinciaBsAsSur()
    })
})
test('@Retiro @Regression (B2B-TC-209) Verificar que al clickear el select Provincia en CABA funciona correctamente', async ({selectProvinciaCABA}) => {
    await test.step('Click en el select Provincia en CABA', async () => {
        await selectProvinciaCABA.navigateToSelectProvinciaCABA()
    })
})
test('@Retiro @Regression (B2B-TC-210) Verificar que al clickear el select Provincia en Catamarca funciona correctamente', async ({selectProvinciaCatamarca}) => {
    await test.step('Click en el select Provincia en Catamarca', async () => {
        await selectProvinciaCatamarca.navigateToSelectProvinciaCatamarca()
    })
})
test('@Retiro @Regression (B2B-TC-211) Verificar que al clickear el select Provincia en Chaco funciona correctamente', async ({selectProvinciaChaco}) => {
    await test.step('Click en el select Provincia en Chaco', async () => {
        await selectProvinciaChaco.navigateToSelectProvinciaChaco()
    })
})
test('@Retiro @Regression (B2B-TC-212) Verificar que al clickear el select Provincia en Chubut funciona correctamente', async ({selectProvinciaChubut}) => {
    await test.step('Click en el select Provincia en Chubut', async () => {
        await selectProvinciaChubut.navigateToSelectProvinciaChubut()
    })
})
test('@Retiro @Regression (B2B-TC-213) Verificar que al clickear el select Provincia en Cordoba funciona correctamente', async ({selectProvinciaCordoba}) => {
    await test.step('Click en el select Provincia en Cordoba', async () => {
        await selectProvinciaCordoba.navigateToSelectProvinciaCordoba()
    })
})
test('@Retiro @Regression (B2B-TC-214) Verificar que al clickear el select Provincia en Corrientes funciona correctamente', async ({selectProvinciaCorrientes}) => {
    await test.step('Click en el select Provincia en Corrientes', async () => {
        await selectProvinciaCorrientes.navigateToSelectProvinciaCorrientes()
    })
})
test('@Retiro @Regression (B2B-TC-215) Verificar que al clickear el select Provincia en Entre Rios funciona correctamente', async ({selectProvinciaEntreRios}) => {
    await test.step('Click en el select Provincia en Entre Rios', async () => {
        await selectProvinciaEntreRios.navigateToSelectProvinciaEntreRios()
    })
})
test('@Retiro @Regression (B2B-TC-216) Verificar que al clickear el select Provincia en Formosa funciona correctamente', async ({selectProvinciaFormosa}) => {
    await test.step('Click en el select Provincia en Formosa', async () => {
        await selectProvinciaFormosa.navigateToSelectProvinciaFormosa()
    })
})
test('@Retiro @Regression (B2B-TC-217) Verificar que al clickear el select Provincia en Jujuy funciona correctamente', async ({selectProvinciaJujuy}) => {
    await test.step('Click en el select Provincia en Jujuy', async () => {
        await selectProvinciaJujuy.navigateToSelectProvinciaJujuy()
    })
})
test('@Retiro @Regression (B2B-TC-218) Verificar que al clickear el select Provincia en La Pampa funciona correctamente', async ({selectProvinciaLaPampa}) => {
    await test.step('Click en el select Provincia en La Pampa', async () => {
        await selectProvinciaLaPampa.navigateToSelectProvinciaLaPampa()
    })
})
test('@Retiro @Regression (B2B-TC-219) Verificar que al clickear el select Provincia en La Rioja funciona correctamente', async ({selectProvinciaLaRioja}) => {
    await test.step('Click en el select Provincia en La Rioja', async () => {
        await selectProvinciaLaRioja.navigateToSelectProvinciaLaRioja()
    })
})
test('@Retiro @Regression (B2B-TC-220) Verificar que al clickear el select Provincia en Mendoza funciona correctamente', async ({selectProvinciaMendoza}) => {
    await test.step('Click en el select Provincia en Mendoza', async () => {
        await selectProvinciaMendoza.navigateToSelectProvinciaMendoza()
    })
})
test('@Retiro @Regression (B2B-TC-221) Verificar que al clickear el select Provincia en Neuquen funciona correctamente', async ({selectProvinciaNeuquen}) => {
    await test.step('Click en el select Provincia en Neuquen', async () => {
        await selectProvinciaNeuquen.navigateToSelectProvinciaNeuquen()
    })
})
test('@Retiro @Regression (B2B-TC-222) Verificar que al clickear el select Provincia en Rio Negro funciona correctamente', async ({selectProvinciaRioNegro}) => {
    await test.step('Click en el select Provincia en Rio Negro', async () => {
        await selectProvinciaRioNegro.navigateToSelectProvinciaRioNegro()
    })
})
test('@Retiro @Regression (B2B-TC-223) Verificar que al clickear el select Provincia en Salta funciona correctamente', async ({selectProvinciaSalta}) => {
    await test.step('Click en el select Provincia en Salta', async () => {
        await selectProvinciaSalta.navigateToSelectProvinciaSalta()
    })
})
test('@Retiro @Regression (B2B-TC-224) Verificar que al clickear el select Provincia en San Juan funciona correctamente', async ({selectProvinciaSanJuan}) => {
    await test.step('Click en el select Provincia en San Juan', async () => {
        await selectProvinciaSanJuan.navigateToSelectProvinciaSanJuan()
    })
})
test('@Retiro @Regression (B2B-TC-225) Verificar que al clickear el select Provincia en San Luis funciona correctamente', async ({selectProvinciaSanLuis}) => {
    await test.step('Click en el select Provincia en San Luis', async () => {
        await selectProvinciaSanLuis.navigateToSelectProvinciaSanLuis()
    })
})
test('@Retiro @Regression (B2B-TC-226) Verificar que al clickear el select Provincia en Santa Cruz funciona correctamente', async ({selectProvinciaSantaCruz}) => {
    await test.step('Click en el select Provincia en Santa Cruz', async () => {
        await selectProvinciaSantaCruz.navigateToSelectProvinciaSantaCruz()
    })
})
test('@Retiro @Regression (B2B-TC-227) Verificar que al clickear el select Provincia en Santa Fe funciona correctamente', async ({selectProvinciaSantaFe}) => {
    await test.step('Click en el select Provincia en Santa Fe', async () => {
        await selectProvinciaSantaFe.navigateToSelectProvinciaSantaFe()
    })
})
test('@Retiro @Regression (B2B-TC-228) Verificar que al clickear el select Provincia en Tierra del Fuego funciona correctamente', async ({selectProvinciaTierraDelFuego}) => {
    await test.step('Click en el select Provincia en Tierra del Fuego', async () => {
        await selectProvinciaTierraDelFuego.navigateToSelectProvinciaTierraDelFuego()
    })
})
test('@Retiro @Regression (B2B-TC-229) Verificar que al clickear el select Provincia en Tucuman funciona correctamente', async ({selectProvinciaTucuman}) => {
    await test.step('Click en el select Provincia en Tucuman', async () => {
        await selectProvinciaTucuman.navigateToSelectProvinciaTucuman()
    })
})
