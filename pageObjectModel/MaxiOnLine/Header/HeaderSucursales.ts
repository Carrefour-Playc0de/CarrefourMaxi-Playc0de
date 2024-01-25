import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class HeaderSucursales extends BasePage {

    readonly SUCURSALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SUCURSALES = this.page.locator("(//span[normalize-space()='Sucursales'])[1]")
    }

    async clickSucursales(): Promise<void> {
        await this.click(this.SUCURSALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToHeaderSucursales(): Promise<void> {
        await this.clickSucursales()
    }
}
