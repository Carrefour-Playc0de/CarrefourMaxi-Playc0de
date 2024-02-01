import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MaxiHeaderCompraOnlineButton extends BasePage {

    readonly COMPRA_ONLINE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COMPRA_ONLINE = this.page.locator("(//a[@class='nav-link'][normalize-space()='Comprá Online'])[1]")
    }

    async clickMaxiHeaderCompraOnlineButton(): Promise<void> {
        await this.click(this.COMPRA_ONLINE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMaxiHeaderCompraOnlineButton(): Promise<void> {
        await this.clickMaxiHeaderCompraOnlineButton()
    }
}
