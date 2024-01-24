import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburOfertasEspecialesDelDia extends BasePage {

    readonly ESPECIALES_DEL_DIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPECIALES_DEL_DIA = this.page.locator("(//div[normalize-space()='ESPECIALES DEL DIA'])[1]")
    }

    async clickOfertasEspecialesDelDia(): Promise<void> {
        await this.click(this.ESPECIALES_DEL_DIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburOfertasEspecialesDelDia(): Promise<void> {
        await this.clickOfertasEspecialesDelDia()
    }
}
