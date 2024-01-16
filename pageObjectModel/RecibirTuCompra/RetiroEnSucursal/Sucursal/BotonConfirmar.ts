import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class BotonConfirmar extends BasePage {

    readonly BOTON_CONFIRMAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_CONFIRMAR = this.page.locator("//button[@id='btn_step2']")
    }
    async clickBotonConfirmar(): Promise<void> {
        await this.click(this.BOTON_CONFIRMAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToBotonConfirmar(): Promise<void> {
        await this.clickBotonConfirmar()
    }
}
