import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaSantaCruz extends BasePage {

    readonly PROVINCIA_SANTA_CRUZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_SANTA_CRUZ = this.page.locator("//option[@value='SANTA CRUZ']")
    }
    async clickSelectProvinciaSantaCruz(): Promise<void> {
        await this.click(this.PROVINCIA_SANTA_CRUZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaSantaCruz(): Promise<void> {
        await this.clickSelectProvinciaSantaCruz()
    }
}
