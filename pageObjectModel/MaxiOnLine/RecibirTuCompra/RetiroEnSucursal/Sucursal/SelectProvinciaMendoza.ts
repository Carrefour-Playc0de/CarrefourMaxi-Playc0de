import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaMendoza extends BasePage {

    readonly SELECT_PROVINCIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROVINCIA = this.page.locator("//select [@id='region']")
    }
    async clickSelectProvinciaMendoza(): Promise<void> {
        await this.selectOption(this.SELECT_PROVINCIA, 'MENDOZA')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaMendoza(): Promise<void> {
        await this.clickSelectProvinciaMendoza()
    }
}
