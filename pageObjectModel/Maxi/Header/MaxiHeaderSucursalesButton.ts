import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MaxiHeaderSucursalesButton extends BasePage {

    readonly SUCURSALES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SUCURSALES = this.page.locator("(//a[@class='nav-link'][normalize-space()='Sucursales'])[1]")
    }

    async clickMaxiHeaderSucursalesButton(): Promise<void> {
        await this.click(this.SUCURSALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMaxiHeaderSucursalesButton(): Promise<void> {
        await this.clickMaxiHeaderSucursalesButton()
    }
}
