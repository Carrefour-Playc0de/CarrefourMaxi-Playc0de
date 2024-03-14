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

test('@Regression @Header (B2B-TC-233) Verificar que al clickear en la opcion Avellaneda del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadAvellaneda}) => {

    await test.step('Click en la opcion Avellaneda', async () => {
        await folletosSelectProvinciaLocalidadAvellaneda.navigateToFolletosSelectProvinciaLocalidadAvellaneda()
    })
})
test('@Regression @Header (B2B-TC-234) Verificar que al clickear en la opcion Burzaco del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadBurzaco}) => {

    await test.step('Click en la opcion Burzaco', async () => {
        await folletosSelectProvinciaLocalidadBurzaco.navigateToFolletosSelectProvinciaLocalidadBurzaco()
    })
})
test('@Regression @Header (B2B-TC-235) Verificar que al clickear en la opcion Catamarca del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadCatamarca}) => {

    await test.step('Click en la opcion Catamarca', async () => {
        await folletosSelectProvinciaLocalidadCatamarca.navigateToFolletosSelectProvinciaLocalidadCatamarca()
    })
})
test('@Regression @Header (B2B-TC-236) Verificar que al clickear en la opcion Chaco del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadChaco}) => {

    await test.step('Click en la opcion Chaco', async () => {
        await folletosSelectProvinciaLocalidadChaco.navigateToFolletosSelectProvinciaLocalidadChaco()
    })
})
test('@Regression @Header (B2B-TC-237) Verificar que al clickear en la opcion Cordoba del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadCordoba}) => {

    await test.step('Click en la opcion Cordoba', async () => {
        await folletosSelectProvinciaLocalidadCordoba.navigateToFolletosSelectProvinciaLocalidadCordoba()
    })
})
test('@Regression @Header (B2B-TC-238) Verificar que al clickear en la opcion Entre Rios del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadEntreRios}) => {

    await test.step('Click en la opcion Entre Rios', async () => {
        await folletosSelectProvinciaLocalidadEntreRios.navigateToFolletosSelectProvinciaLocalidadEntreRios()
    })
})
test('@Regression @Header (B2B-TC-239) Verificar que al clickear en la opcion Escobar del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadEscobar}) => {

    await test.step('Click en la opcion Escobar', async () => {
        await folletosSelectProvinciaLocalidadEscobar.navigateToFolletosSelectProvinciaLocalidadEscobar()
    })
})
test('@Regression @Header (B2B-TC-240) Verificar que al clickear en la opcion Ezpeleta del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadEzpeleta}) => {

    await test.step('Click en la opcion Ezpeleta', async () => {
        await folletosSelectProvinciaLocalidadEzpeleta.navigateToFolletosSelectProvinciaLocalidadEzpeleta()
    })
})
test('@Regression @Header (B2B-TC-241) Verificar que al clickear en la opcion Ituzaingo del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadItuzaingo}) => {

    await test.step('Click en la opcion Ituzaingo', async () => {
        await folletosSelectProvinciaLocalidadItuzaingo.navigateToFolletosSelectProvinciaLocalidadItuzaingo()
    })
})
test('@Regression @Header (B2B-TC-242) Verificar que al clickear en la opcion Jose C Paz del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadJoseCPaz}) => {

    await test.step('Click en la opcion Jose C Paz', async () => {
        await folletosSelectProvinciaLocalidadJoseCPaz.navigateToFolletosSelectProvinciaLocalidadJoseCPaz()
    })
})
test('@Regression @Header(B2B-TC-243) Verificar que al clickear en la opcion Jose Leon Suarez del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadJoseLeonSuarez}) => {

    await test.step('Click en la opcion Jose Leon Suarez', async () => {
        await folletosSelectProvinciaLocalidadJoseLeonSuarez.navigateToFolletosSelectProvinciaLocalidadJoseLeonSuarez()
    })
})
test('@Regression @Header (B2B-TC-244) Verificar que al clickear en la opcion Jujuy del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadJujuy}) => {

    await test.step('Click en la opcion Jujuy', async () => {
        await folletosSelectProvinciaLocalidadJujuy.navigateToFolletosSelectProvinciaLocalidadJujuy()
    })
})
test('@Regression @Header (B2B-TC-245) Verificar que al clickear en la opcion Laferrere del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadLaferrere}) => {

    await test.step('Click en la opcion Laferrere', async () => {
        await folletosSelectProvinciaLocalidadLaferrere.navigateToFolletosSelectProvinciaLocalidadLaferrere()
    })
})
test('@Regression @Header (B2B-TC-246) Verificar que al clickear en la opcion Loma Hermosa del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadLomaHermosa}) => {

    await test.step('Click en la opcion Loma Hermosa', async () => {
        await folletosSelectProvinciaLocalidadLomaHermosa.navigateToFolletosSelectProvinciaLocalidadLomaHermosa()
    })
})
test('@Regression @Header (B2B-TC-247) Verificar que al clickear en la opcion Lomas de Zamora del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadLomasDeZamora}) => {

    await test.step('Click en la opcion Lomas de Zamora', async () => {
        await folletosSelectProvinciaLocalidadLomasDeZamora.navigateToFolletosSelectProvinciaLocalidadLomasDeZamora()
    })
})
test('@Regression @Header (B2B-TC-248) Verificar que al clickear en la opcion Mendoza del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadMendoza}) => {

    await test.step('Click en la opcion Mendoza', async () => {
        await folletosSelectProvinciaLocalidadMendoza.navigateToFolletosSelectProvinciaLocalidadMendoza()
    })
})
test('@Regression @Header (B2B-TC-249) Verificar que al clickear en la opcion Moreno del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadMoreno}) => {

    await test.step('Click en la opcion Moreno', async () => {
        await folletosSelectProvinciaLocalidadMoreno.navigateToFolletosSelectProvinciaLocalidadMoreno()
    })
})
test('@Regression @Header (B2B-TC-250) Verificar que al clickear en la opcion Pilar del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadPilar}) => {

    await test.step('Click en la opcion Pilar', async () => {
        await folletosSelectProvinciaLocalidadPilar.navigateToFolletosSelectProvinciaLocalidadPilar()
    })
})
test('@Regression @Header (B2B-TC-251) Verificar que al clickear en la opcion San Vicente del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadSanVicente}) => {

    await test.step('Click en la opcion San Vicente', async () => {
        await folletosSelectProvinciaLocalidadSanVicente.navigateToFolletosSelectProvinciaLocalidadSanVicente()
    })
})
test('@Regression @Header (B2B-TC-252) Verificar que al clickear en la opcion Tandil del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadTandil}) => {

    await test.step('Click en la opcion Tandil', async () => {
        await folletosSelectProvinciaLocalidadTandil.navigateToFolletosSelectProvinciaLocalidadTandil()
    })
})
test('@Regression @Header (B2B-TC-253) Verificar que al clickear en la opcion Temperley del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadTemperley}) => {

    await test.step('Click en la opcion Temperley', async () => {
        await folletosSelectProvinciaLocalidadTemperley.navigateToFolletosSelectProvinciaLocalidadTemperley()
    })
})
test('@Regression @Header (B2B-TC-254) Verificar que al clickear en la opcion Tigre del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadTigre}) => {

    await test.step('Click en la opcion Tigre', async () => {
        await folletosSelectProvinciaLocalidadTigre.navigateToFolletosSelectProvinciaLocalidadTigre()
    })
})
test('@Regression @Header (B2B-TC-255) Verificar que al clickear en la opcion Tortuguitas del select Provincia funciona correctamente', async ({folletosSelectProvinciaLocalidadTortuguitas}) => {

    await test.step('Click en la opcion Tortuguitas', async () => {
        await folletosSelectProvinciaLocalidadTortuguitas.navigateToFolletosSelectProvinciaLocalidadTortuguitas()
    })
})
