import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MaxiHeaderFolletosButton extends BasePage {

    readonly FOLLETOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FOLLETOS = this.page.locator("(//a[@class='nav-link'][normalize-space()='Folletos'])[1]")
    }

    async clickMaxiHeaderFolletosButton(): Promise<void> {
        await this.click(this.FOLLETOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMaxiHeaderFolletosButton(): Promise<void> {
        await this.clickMaxiHeaderFolletosButton()
    }
}
