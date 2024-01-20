import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosPAS extends BasePage {

    readonly PAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAS = this.page.locator("(//div[normalize-space()='p.a.s.'])[1]")
    }

    async clickLacteosProdsFrescosPAS(): Promise<void> {
        await this.click(this.PAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosPAS(): Promise<void> {
        await this.clickLacteosProdsFrescosPAS()
    }
}
