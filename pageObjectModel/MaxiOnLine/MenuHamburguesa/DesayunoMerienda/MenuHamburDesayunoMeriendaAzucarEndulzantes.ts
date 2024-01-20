import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburDesayunoMeriendaAzucarEndulzantes extends BasePage {

    readonly AZUCAR_ENDULZANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AZUCAR_ENDULZANTES = this.page.locator("(//div[normalize-space()='azúcar y endulzantes'])[1]")
    }

    async clickDesayunoMeriendaAzucarEndulzantes(): Promise<void> {
        await this.click(this.AZUCAR_ENDULZANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaAzucarEndulzantes(): Promise<void> {
        await this.clickDesayunoMeriendaAzucarEndulzantes()
    }
}
