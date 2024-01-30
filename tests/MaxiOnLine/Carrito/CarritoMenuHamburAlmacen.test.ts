import test from '../../../config/testManager'


test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta, botonRetiroEnSucursal, botonConfirmarRecibirTuCompra, selectProvinciaBsAsNorte, selectSucursalArmaPedidoCAMPANAColectoraNorte1647, botonConfirmar, modalIngresaTusDatos, cerrarModalYaPuedesContinuarPedido,menuHamburguesa, menuHamburAlmacen, menuHamburAlmacenVerTodo}) => {
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
    await test.step('Click en el select Provincia en BS AS (NORTE)', async () => {
        await selectProvinciaBsAsNorte.navigateToSelectProvinciaBsAsNorte()
    })
    await test.step('Click en CAMPANA Colectora Norte 1647', async () => {
        await selectSucursalArmaPedidoCAMPANAColectoraNorte1647.navigateToSelectSucursalArmaPedidoCAMPANAColectoraNorte1647()
    })
    await test.step('Click en boton CONFIRMAR', async () => {
        await botonConfirmar.navigateToBotonConfirmar()
    })
    await test.step('Click en boton INGRESAR', async () => {
        await modalIngresaTusDatos.navigateToModalIngresaTusDatos()
    })
    await test.step('Click en la X del modal Ya Podes Continuar con el Pedidio', async () => {
        await cerrarModalYaPuedesContinuarPedido.navigateToCerrarModalYaPuedesContinuarPedido()
    })
    await test.step('Click en el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Almacen', async () => {
        await menuHamburAlmacen.navigateToMenuHamburAlmacen()
    })
    await test.step('Click en Almacen VER TODO', async () => {
        await menuHamburAlmacenVerTodo.navigateToMenuHamburAlmacenVerTodo()
    })
})

test('@Test @Regression @Carrito (TS-31) Verificar que al clickear los Carritos de varios productos del Almacen funciona correctamente', async ({carritoMenuHamburAlmacenVerTodo}) => {

    await test.step('Click en los Carritos', async () => {
        await carritoMenuHamburAlmacenVerTodo.navigateToCarritoMenuHamburAlmacenVerTodo()
    })
})
// await this.page.waitForTimeout(3000)