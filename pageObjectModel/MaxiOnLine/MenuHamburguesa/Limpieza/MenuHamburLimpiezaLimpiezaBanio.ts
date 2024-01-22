import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaBanio extends BasePage {

    readonly LIMPIEZA_BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_BANIO = this.page.locator("(//div[normalize-space()='limpieza de baño'])[1]")
    }

    async clickLimpiezaBanio(): Promise<void> {
        await this.click(this.LIMPIEZA_BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLimpiezaBanio(): Promise<void> {
        await this.clickLimpiezaBanio()
    }
}
