import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaFormosa extends BasePage {

    readonly PROVINCIA_FORMOSA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_FORMOSA = this.page.locator("//option[@value='FORMOSA']")
    }
    async clickSelectProvinciaFormosa(): Promise<void> {
        await this.click(this.PROVINCIA_FORMOSA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaFormosa(): Promise<void> {
        await this.clickSelectProvinciaFormosa()
    }
}
