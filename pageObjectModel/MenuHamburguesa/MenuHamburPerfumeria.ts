import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburPerfumeria extends BasePage {

    readonly PERFUMERIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PERFUMERIA = this.page.locator("//div[normalize-space()='perfumería']")
    }

    async clickPerfumeria(): Promise<void> {
        await this.click(this.PERFUMERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeria(): Promise<void> {
        await this.clickPerfumeria()
    }
}
