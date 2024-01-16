import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaMendoza extends BasePage {

    readonly PROVINCIA_MENDOZA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_MENDOZA = this.page.locator("//option[@value='MENDOZA']")
    }
    async clickSelectProvinciaMendoza(): Promise<void> {
        await this.click(this.PROVINCIA_MENDOZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaMendoza(): Promise<void> {
        await this.clickSelectProvinciaMendoza()
    }
}
