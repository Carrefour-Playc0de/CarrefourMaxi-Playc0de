import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenArrozLegumbres extends BasePage {

    readonly ARROZ_LEGUMBRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARROZ_LEGUMBRES = this.page.locator("//div[normalize-space()='arroz y legumbres']")
    }

    async clickAlmacenArrozLegumbres(): Promise<void> {
        await this.click(this.ARROZ_LEGUMBRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenArrozLegumbres(): Promise<void> {
        await this.clickAlmacenArrozLegumbres()
    }
}
