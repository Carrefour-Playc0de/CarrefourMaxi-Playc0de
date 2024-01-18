import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaSalta extends BasePage {

    readonly PROVINCIA_SALTA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_SALTA = this.page.locator("//option[@value='SALTA']")
    }
    async clickSelectProvinciaSalta(): Promise<void> {
        await this.click(this.PROVINCIA_SALTA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaSalta(): Promise<void> {
        await this.clickSelectProvinciaSalta()
    }
}
