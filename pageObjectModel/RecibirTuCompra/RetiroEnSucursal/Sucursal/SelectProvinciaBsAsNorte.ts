import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaBsAsNorte extends BasePage {

    readonly PROVINCIA_BS_AS_NORTE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.PROVINCIA_BS_AS_NORTE = this.page.locator("//option[@value='BS AS (NORTE)']")
        this.PROVINCIA_BS_AS_NORTE = this.page.locator('//select [@id="region"]')
    }
    async clickSelectProvinciaBsAsNorte(): Promise<void> {
        await this.selectOption(this.PROVINCIA_BS_AS_NORTE, 'BS AS (NORTE)')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToSelectProvinciaBsAsNorte(): Promise<void> {
        await this.clickSelectProvinciaBsAsNorte()
    }
}
