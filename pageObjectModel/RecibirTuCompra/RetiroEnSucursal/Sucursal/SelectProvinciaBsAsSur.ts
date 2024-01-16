import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaBsAsSur extends BasePage {

    readonly PROVINCIA_BS_AS_SUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_BS_AS_SUR = this.page.locator("//option[@value='BS AS (SUR)']")
    }
    async clickSelectProvinciaBsAsSur(): Promise<void> {
        await this.click(this.PROVINCIA_BS_AS_SUR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaBsAsSur(): Promise<void> {
        await this.clickSelectProvinciaBsAsSur()
    }
}
