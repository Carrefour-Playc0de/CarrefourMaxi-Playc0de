import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaCocina extends BasePage {

    readonly LIMPIEZA_COCINA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_COCINA = this.page.locator("(//div[normalize-space()='limpieza de cocina'])[1]")
    }

    async clickLimpiezaCocina(): Promise<void> {
        await this.click(this.LIMPIEZA_COCINA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLimpiezaCocina(): Promise<void> {
        await this.clickLimpiezaCocina()
    }
}
