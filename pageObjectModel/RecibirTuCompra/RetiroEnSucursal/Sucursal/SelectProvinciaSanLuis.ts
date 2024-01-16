import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaSanLuis extends BasePage {

    readonly PROVINCIA_SAN_LUIS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_SAN_LUIS = this.page.locator("//option[@value='SAN LUIS']")
    }
    async clickSelectProvinciaSanLuis(): Promise<void> {
        await this.click(this.PROVINCIA_SAN_LUIS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaSanLuis(): Promise<void> {
        await this.clickSelectProvinciaSanLuis()
    }
}
