import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class CerrarModalYaPuedesContinuarPedido extends BasePage {

    readonly CRUZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CRUZ = this.page.locator("(//img[@class='img_close_c'])[1]")
    }
    async clickCruz(): Promise<void> {
        await this.click(this.CRUZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToCerrarModalYaPuedesContinuarPedido(): Promise<void> {
        await this.clickCruz()
    }
}
