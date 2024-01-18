import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenSnacks extends BasePage {

    readonly SNACKS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SNACKS = this.page.locator("//div[normalize-space()='snacks']")
    }

    async clickAlmacenSnacks(): Promise<void> {
        await this.click(this.SNACKS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenSnacks(): Promise<void> {
        await this.clickAlmacenSnacks()
    }
}
