import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaNeuquen extends BasePage {

    readonly PROVINCIA_NEUQUEN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_NEUQUEN = this.page.locator("//option[@value='NEUQUEN']")
    }
    async clickSelectProvinciaNeuquen(): Promise<void> {
        await this.click(this.PROVINCIA_NEUQUEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaNeuquen(): Promise<void> {
        await this.clickSelectProvinciaNeuquen()
    }
}
