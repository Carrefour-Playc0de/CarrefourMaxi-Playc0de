import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderia extends BasePage {

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async mouseOverPanaderia(): Promise<void> {
        let selector = "//div[normalize-space()='panadería']"
        await this.page.waitForSelector(selector)
        let element = await this.page.$(selector)
        await element?.hover()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderia(): Promise<void> {
        await this.mouseOverPanaderia()
    }
}
