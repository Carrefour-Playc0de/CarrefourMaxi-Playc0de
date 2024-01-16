import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaTierraDelFuego extends BasePage {

    readonly PROVINCIA_TIERRA_DEL_FUEGO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_TIERRA_DEL_FUEGO = this.page.locator("//option[@value='TIERRA DEL FUEGO']")
    }
    async clickSelectProvinciaTierraDelFuego(): Promise<void> {
        await this.click(this.PROVINCIA_TIERRA_DEL_FUEGO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaTierraDelFuego(): Promise<void> {
        await this.clickSelectProvinciaTierraDelFuego()
    }
}
