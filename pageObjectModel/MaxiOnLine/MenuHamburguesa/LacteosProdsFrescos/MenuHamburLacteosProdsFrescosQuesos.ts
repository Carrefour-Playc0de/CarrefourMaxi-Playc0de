import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesos extends BasePage {

    readonly QUESOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS = this.page.locator("(//div[normalize-space()='quesos'])[1]")
    }

    async clickLacteosProdsFrescosQuesos(): Promise<void> {
        await this.click(this.QUESOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesos(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesos()
    }
}
