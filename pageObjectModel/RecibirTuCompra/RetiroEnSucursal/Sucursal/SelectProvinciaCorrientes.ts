import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaCorrientes extends BasePage {

    readonly PROVINCIA_CORRIENTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CORRIENTES = this.page.locator("//option[@value='CORRIENTES']")
    }
    async clickSelectProvinciaCorrientes(): Promise<void> {
        await this.click(this.PROVINCIA_CORRIENTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaCorrientes(): Promise<void> {
        await this.clickSelectProvinciaCorrientes()
    }
}
