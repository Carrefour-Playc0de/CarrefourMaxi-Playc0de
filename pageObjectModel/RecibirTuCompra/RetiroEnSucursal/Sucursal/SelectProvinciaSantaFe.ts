import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaSantaFe extends BasePage {

    readonly PROVINCIA_SANTA_FE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_SANTA_FE = this.page.locator("//option[@value='SANTA FE']")
    }
    async clickSelectProvinciaSantaFe(): Promise<void> {
        await this.click(this.PROVINCIA_SANTA_FE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaSantaFe(): Promise<void> {
        await this.clickSelectProvinciaSantaFe()
    }
}
