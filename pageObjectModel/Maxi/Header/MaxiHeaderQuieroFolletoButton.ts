import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MaxiHeaderQuieroFolletoButton extends BasePage {

    readonly QUIERO_FOLLETO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUIERO_FOLLETO = this.page.locator("(//a[@class='nav-link'][normalize-space()='Quiero Folleto'])[1]")
    }

    async clickMaxiHeaderQuieroFolletoButton(): Promise<void> {
        await this.click(this.QUIERO_FOLLETO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMaxiHeaderQuieroFolletoButton(): Promise<void> {
        await this.clickMaxiHeaderQuieroFolletoButton()
    }
}
