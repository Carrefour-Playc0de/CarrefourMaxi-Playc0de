import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenCaldosSopasPure extends BasePage {

    readonly CALDOS_SOPAS_PURE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CALDOS_SOPAS_PURE = this.page.locator("//div[normalize-space()='caldos, sopas y puré']")
    }

    async clickAlmacenCaldosSopasPure(): Promise<void> {
        await this.click(this.CALDOS_SOPAS_PURE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenCaldosSopasPure(): Promise<void> {
        await this.clickAlmacenCaldosSopasPure()
    }
}
