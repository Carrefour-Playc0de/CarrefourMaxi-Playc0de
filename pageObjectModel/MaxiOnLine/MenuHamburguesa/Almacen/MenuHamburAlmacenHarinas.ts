import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenHarinas extends BasePage {

    readonly HARINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HARINAS = this.page.locator("//div[normalize-space()='harinas']")
    }

    async clickAlmacenHarinas(): Promise<void> {
        await this.click(this.HARINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenHarinas(): Promise<void> {
        await this.clickAlmacenHarinas()
    }
}
