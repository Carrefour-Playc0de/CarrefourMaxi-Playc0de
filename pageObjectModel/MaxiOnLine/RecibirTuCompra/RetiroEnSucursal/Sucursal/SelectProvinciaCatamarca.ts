import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class SelectProvinciaCatamarca extends BasePage {

    readonly PROVINCIA_CATAMARCA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CATAMARCA = this.page.locator("//option[@value='CATAMARCA']")
    }
    async clickSelectProvinciaCatamarca(): Promise<void> {
        await this.click(this.PROVINCIA_CATAMARCA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaCatamarca(): Promise<void> {
        await this.clickSelectProvinciaCatamarca()
    }
}
