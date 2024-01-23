import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPanaderiaPanRalladoRebozadores extends BasePage {

    readonly PAN_RALLADO_REBOZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAN_RALLADO_REBOZADORES = this.page.locator("(//div[normalize-space()='pan rallado y rebozadores'])[1]")
    }

    async clickPanaderiaPanRalladoRebozadores(): Promise<void> {
        await this.click(this.PAN_RALLADO_REBOZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaPanRalladoRebozadores(): Promise<void> {
        await this.clickPanaderiaPanRalladoRebozadores()
    }
}
