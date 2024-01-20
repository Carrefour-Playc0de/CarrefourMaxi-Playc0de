import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosSeco extends BasePage {

    readonly SECO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SECO = this.page.locator("(//div[normalize-space()='seco'])[1]")
    }

    async clickLacteosProdsFrescosSeco(): Promise<void> {
        await this.click(this.SECO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosSeco(): Promise<void> {
        await this.clickLacteosProdsFrescosSeco()
    }
}
