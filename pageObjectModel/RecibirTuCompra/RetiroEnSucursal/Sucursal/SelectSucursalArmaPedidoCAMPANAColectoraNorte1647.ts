import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectSucursalArmaPedidoCAMPANAColectoraNorte1647 extends BasePage {

    // readonly SUCURSAL_ARMA_PEDIDO_CAMPANA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.SUCURSAL_ARMA_PEDIDO_CAMPANA = this.page.locator("//option[@value='232']")
        // this.SUCURSAL_ARMA_PEDIDO_CAMPANA = this.page.locator('//select [@id="seller"]')
    }
    async clickSelectSucursalArmaPedidoCAMPANAColectoraNorte1647(): Promise<void> {
        await this.selectOption(this.env.selectSucursalArmaPedido(), '232')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectSucursalArmaPedidoCAMPANAColectoraNorte1647(): Promise<void> {
        await this.clickSelectSucursalArmaPedidoCAMPANAColectoraNorte1647()
    }
}
