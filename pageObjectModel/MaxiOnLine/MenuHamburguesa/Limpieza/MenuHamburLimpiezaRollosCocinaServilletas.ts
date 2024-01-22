import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaRollosCocinaServilletas extends BasePage {

    readonly Rrollos_Cocina_Servilletas: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.Rrollos_Cocina_Servilletas = this.page.locator("(//div[normalize-space()='rollos de cocina y servilletas'])[1]")
    }

    async clickRollosCocinaServilletas(): Promise<void> {
        await this.click(this.Rrollos_Cocina_Servilletas)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaRollosCocinaServilletas(): Promise<void> {
        await this.clickRollosCocinaServilletas()
    }
}
