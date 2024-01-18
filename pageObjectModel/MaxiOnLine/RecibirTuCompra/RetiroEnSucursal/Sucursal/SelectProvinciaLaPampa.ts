import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaLaPampa extends BasePage {

    readonly PROVINCIA_LA_PAMPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_LA_PAMPA = this.page.locator("//option[@value='LA PAMPA']")
    }
    async clickSelectProvinciaLaPampa(): Promise<void> {
        await this.click(this.PROVINCIA_LA_PAMPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaLaPampa(): Promise<void> {
        await this.clickSelectProvinciaLaPampa()
    }
}
