import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaChaco extends BasePage {

    readonly PROVINCIA_CHACO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CHACO = this.page.locator("//option[@value='CHACO']")
    }
    async clickSelectProvinciaChaco(): Promise<void> {
        await this.click(this.PROVINCIA_CHACO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaChaco(): Promise<void> {
        await this.clickSelectProvinciaChaco()
    }
}
