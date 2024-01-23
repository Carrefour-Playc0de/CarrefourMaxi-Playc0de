import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPerfumeriaProteccionAdultos extends BasePage {

    readonly PROTECCION_ADULTOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROTECCION_ADULTOS = this.page.locator("(//div[normalize-space()='protección para adultos'])[1]")
    }

    async clickPerfumeriaProteccionAdultos(): Promise<void> {
        await this.click(this.PROTECCION_ADULTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaProteccionAdultos(): Promise<void> {
        await this.clickPerfumeriaProteccionAdultos()
    }
}
