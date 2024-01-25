import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class HeaderFolletos extends BasePage {

    readonly FOLLETOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FOLLETOS = this.page.locator("(//span[normalize-space()='Folletos'])[1]")
    }

    async clickFolletos(): Promise<void> {
        await this.click(this.FOLLETOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToHeaderFolletos(): Promise<void> {
        await this.clickFolletos()
    }
}
