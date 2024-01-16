import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaCordoba extends BasePage {

    readonly PROVINCIA_CORDOBA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_CORDOBA = this.page.locator("//option[@value='CORDOBA']")
    }
    async clickSelectProvinciaCordoba(): Promise<void> {
        await this.click(this.PROVINCIA_CORDOBA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaCordoba(): Promise<void> {
        await this.clickSelectProvinciaCordoba()
    }
}
