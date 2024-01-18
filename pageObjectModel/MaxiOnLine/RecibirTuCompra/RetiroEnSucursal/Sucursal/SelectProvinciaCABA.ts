import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaCABA extends BasePage {

    readonly PROVINCIA_CABA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CABA = this.page.locator("//option[@value='CABA']")
    }
    async clickSelectProvinciaCABA(): Promise<void> {
        await this.click(this.PROVINCIA_CABA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaCABA(): Promise<void> {
        await this.clickSelectProvinciaCABA()
    }
}
