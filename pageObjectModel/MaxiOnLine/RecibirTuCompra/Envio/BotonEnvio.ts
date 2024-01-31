import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class BotonEnvio extends BasePage {

    readonly ENVIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENVIO = this.page.locator("(//div[@id='deliveryType1'])[1]")
    }
    async clickBotonEnvio(): Promise<void> {
        await this.click(this.ENVIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToBotonEnvio(): Promise<void> {
        await this.clickBotonEnvio()
    }
}
