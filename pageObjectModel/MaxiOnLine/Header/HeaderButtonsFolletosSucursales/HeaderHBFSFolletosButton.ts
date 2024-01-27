import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class HeaderHBFSFolletosButton extends BasePage {

    readonly BUTTON: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUTTON = this.page.locator("(//a[@class='nav-link'][normalize-space()='Folletos'])[1]")
    }

    async clickFolletosButton(): Promise<void> {
        await this.click(this.BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToHeaderHBFSFolletosButton(): Promise<void> {
        await this.clickFolletosButton()
    }
}
