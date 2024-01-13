import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class BotonRetiroEnSucursal extends BasePage {

    readonly RETIRO_EN_SUCURSAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RETIRO_EN_SUCURSAL = this.page.locator("//div[@id='deliveryType2']")
    }
    async clickBotonRetiroEnSucursal(): Promise<void> {
        await this.click(this.RETIRO_EN_SUCURSAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToBotonRetiroEnSucursal(): Promise<void> {
        await this.clickBotonRetiroEnSucursal()
    }
}
