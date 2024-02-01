import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MaxiHeaderQuieroTerminalCobroButton extends BasePage {

    readonly QUIERO_TERMINAL_COBRO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUIERO_TERMINAL_COBRO = this.page.locator("(//a[@class='nav-link'][normalize-space()='Quiero terminal de cobro'])[1]")
    }

    async clickMaxiHeaderQuieroTerminalCobroButton(): Promise<void> {
        await this.click(this.QUIERO_TERMINAL_COBRO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMaxiHeaderQuieroTerminalCobroButton(): Promise<void> {
        await this.clickMaxiHeaderQuieroTerminalCobroButton()
    }
}
