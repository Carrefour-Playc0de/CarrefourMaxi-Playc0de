import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeria extends BasePage {

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async mouseOverPerfumeria(): Promise<void> {
        let selector = "//div[normalize-space()='perfumería']"
        await this.page.waitForSelector(selector)
        let element = await this.page.$(selector)
        await element?.hover()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeria(): Promise<void> {
        await this.mouseOverPerfumeria()
    }
}
