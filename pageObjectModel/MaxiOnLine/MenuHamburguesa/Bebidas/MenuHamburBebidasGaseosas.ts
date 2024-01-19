import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburBebidasGaseosas extends BasePage {

    readonly GASEOSAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GASEOSAS = this.page.locator("(//div[normalize-space()='gaseosas'])[1]")
    }

    async clickBebidasGaseosas(): Promise<void> {
        await this.click(this.GASEOSAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasGaseosas(): Promise<void> {
        await this.clickBebidasGaseosas()
    }
}
