import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaArticulosLimpieza extends BasePage {

    readonly ARTICULOS_LIMPIEZA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARTICULOS_LIMPIEZA = this.page.locator("(//div[normalize-space()='artículos de limpieza'])[1]")
    }

    async clickArticulosLimpieza(): Promise<void> {
        await this.click(this.ARTICULOS_LIMPIEZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaArticulosLimpieza(): Promise<void> {
        await this.clickArticulosLimpieza()
    }
}
