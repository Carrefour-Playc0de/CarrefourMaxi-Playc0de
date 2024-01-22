import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaRopa extends BasePage {

    readonly LIMPIEZA_ROPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_ROPA = this.page.locator("(//div[normalize-space()='limpieza de la ropa'])[1]")
    }

    async clickLimpiezaRopa(): Promise<void> {
        await this.click(this.LIMPIEZA_ROPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLimpiezaRopa(): Promise<void> {
        await this.clickLimpiezaRopa()
    }
}
