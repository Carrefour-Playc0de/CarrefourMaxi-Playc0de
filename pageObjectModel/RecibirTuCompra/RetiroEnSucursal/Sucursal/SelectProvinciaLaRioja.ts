import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaLaRioja extends BasePage {

    readonly PROVINCIA_LA_RIOJA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_LA_RIOJA = this.page.locator("//option[@value='LA RIOJA']")
    }
    async clickSelectProvinciaLaRioja(): Promise<void> {
        await this.click(this.PROVINCIA_LA_RIOJA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaLaRioja(): Promise<void> {
        await this.clickSelectProvinciaLaRioja()
    }
}
