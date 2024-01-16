import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaRioNegro extends BasePage {

    readonly PROVINCIA_RIO_NEGRO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_RIO_NEGRO = this.page.locator("//option[@value='RIO NEGRO']")
    }
    async clickSelectProvinciaRioNegro(): Promise<void> {
        await this.click(this.PROVINCIA_RIO_NEGRO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaRioNegro(): Promise<void> {
        await this.clickSelectProvinciaRioNegro()
    }
}
