import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaChubut extends BasePage {

    readonly PROVINCIA_CHUBUT: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CHUBUT = this.page.locator("//option[@value='CHUBUT']")
    }
    async clickSelectProvinciaChubut(): Promise<void> {
        await this.click(this.PROVINCIA_CHUBUT)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaChubut(): Promise<void> {
        await this.clickSelectProvinciaChubut()
    }
}
