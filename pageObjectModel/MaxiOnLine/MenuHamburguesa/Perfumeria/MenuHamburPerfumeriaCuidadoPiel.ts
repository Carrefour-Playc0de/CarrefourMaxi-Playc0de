import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPerfumeriaCuidadoPiel extends BasePage {

    readonly CUIDADO_PIEL: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_PIEL = this.page.locator("(//div[normalize-space()='cuidado de la piel'])[1]")
    }

    async clickPerfumeriaCuidadoPiel(): Promise<void> {
        await this.click(this.CUIDADO_PIEL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaCuidadoPiel(): Promise<void> {
        await this.clickPerfumeriaCuidadoPiel()
    }
}
