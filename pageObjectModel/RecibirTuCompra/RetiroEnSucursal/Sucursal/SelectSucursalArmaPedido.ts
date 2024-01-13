import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectSucursalArmaPedido extends BasePage {

    readonly SELECT_SUCURSAL_ARMA_PEDIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_SUCURSAL_ARMA_PEDIDO = this.page.locator('//select [@id="seller"]')
    }
    async clickSelectSucursalArmaPedido(): Promise<void> {
        await this.click(this.SELECT_SUCURSAL_ARMA_PEDIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectSucursalArmaPedido(): Promise<void> {
        await this.clickSelectSucursalArmaPedido()
    }
}
