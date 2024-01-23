import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPerfumeriaJabones extends BasePage {

    readonly JABONES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JABONES = this.page.locator("(//div[normalize-space()='jabones'])[1]")
    }

    async clickPerfumeriaJabones(): Promise<void> {
        await this.click(this.JABONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaJabones(): Promise<void> {
        await this.clickPerfumeriaJabones()
    }
}
