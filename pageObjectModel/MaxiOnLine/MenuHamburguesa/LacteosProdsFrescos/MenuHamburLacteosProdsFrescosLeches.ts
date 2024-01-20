import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLeches extends BasePage {

    readonly LECHES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES = this.page.locator("(//div[normalize-space()='leches'])[1]")
    }

    async clickLacteosProdsFrescosLeches(): Promise<void> {
        await this.click(this.LECHES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosLeches(): Promise<void> {
        await this.clickLacteosProdsFrescosLeches()
    }
}
