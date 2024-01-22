import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaPapelesHigienicos extends BasePage {

    readonly PAPELES_HIGIENICOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAPELES_HIGIENICOS = this.page.locator("(//div[normalize-space()='papeles higiénicos'])[1]")
    }

    async clickPapelesHigienicos(): Promise<void> {
        await this.click(this.PAPELES_HIGIENICOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaPapelesHigienicos(): Promise<void> {
        await this.clickPapelesHigienicos()
    }
}
