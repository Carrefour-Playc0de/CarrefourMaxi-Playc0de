import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpieza extends BasePage {

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async mouseOverLimpieza(): Promise<void> {
        let selector = "(//div[normalize-space()='limpieza'])[1]"
        await this.page.waitForSelector(selector)
        let element = await this.page.$(selector)
        await element?.hover()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpieza(): Promise<void> {
        await this.mouseOverLimpieza()
    }
}
