import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class HeaderHBFSQuieroTerminalCobroButton extends BasePage {

    readonly BUTTON: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUTTON = this.page.locator("(//a[@class='nav-link'][normalize-space()='Quiero terminal de cobro'])[1]")
    }

    async clickQuieroTerminalCobroButton(): Promise<void> {
        await this.click(this.BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToHeaderHBFSQuieroTerminalCobroButton(): Promise<void> {
        await this.clickQuieroTerminalCobroButton()
    }
}
