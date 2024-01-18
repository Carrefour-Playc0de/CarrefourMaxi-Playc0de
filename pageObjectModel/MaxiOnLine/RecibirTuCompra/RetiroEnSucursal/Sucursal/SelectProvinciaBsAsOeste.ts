import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaBsAsOeste extends BasePage {

    readonly PROVINCIA_BS_AS_OESTE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_BS_AS_OESTE = this.page.locator("//option[@value='BS AS (OESTE)']")
    }
    async clickSelectProvinciaBsAsOeste(): Promise<void> {
        await this.click(this.PROVINCIA_BS_AS_OESTE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaBsAsOeste(): Promise<void> {
        await this.clickSelectProvinciaBsAsOeste()
    }
}
