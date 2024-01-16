import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaBsAsNorte extends BasePage {

    readonly PROVINCIA_BS_AS_NORTE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_BS_AS_NORTE = this.page.locator("//option[@value='BS AS (NORTE)']")
    }
    async clickSelectProvinciaBsAsNorte(): Promise<void> {
        await this.click(this.PROVINCIA_BS_AS_NORTE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaBsAsNorte(): Promise<void> {
        await this.clickSelectProvinciaBsAsNorte()
    }
}
