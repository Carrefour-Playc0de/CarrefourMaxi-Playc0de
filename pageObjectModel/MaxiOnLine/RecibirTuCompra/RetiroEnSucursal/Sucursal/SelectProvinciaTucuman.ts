import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaTucuman extends BasePage {

    readonly PROVINCIA_TUCUMAN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_TUCUMAN = this.page.locator("//option[@value='TUCUMAN']")
    }
    async clickSelectProvinciaTucuman(): Promise<void> {
        await this.click(this.PROVINCIA_TUCUMAN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaTucuman(): Promise<void> {
        await this.clickSelectProvinciaTucuman()
    }
}
