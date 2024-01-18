import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburAlmacen extends BasePage {

    readonly ALMACEN: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALMACEN = this.page.locator("//div[normalize-space()='almacén']")
    }

    async clickAlmacen(): Promise<void> {
        await this.click(this.ALMACEN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacen(): Promise<void> {
        await this.clickAlmacen()
    }
}
