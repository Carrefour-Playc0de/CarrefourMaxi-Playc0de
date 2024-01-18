import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenGolosinasChocolates extends BasePage {

    readonly GOLOSINAS_CHOCOLATES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GOLOSINAS_CHOCOLATES = this.page.locator("//div[normalize-space()='golosinas y chocolates']")
    }

    async clickAlmacenGolosinasChocolates(): Promise<void> {
        await this.click(this.GOLOSINAS_CHOCOLATES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenGolosinasChocolates(): Promise<void> {
        await this.clickAlmacenGolosinasChocolates()
    }
}
