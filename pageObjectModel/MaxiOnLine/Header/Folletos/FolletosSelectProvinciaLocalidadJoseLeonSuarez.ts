import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class FolletosSelectProvinciaLocalidadJoseLeonSuarez extends BasePage {

    readonly SELECT_PROV_LOCALIDAD: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROV_LOCALIDAD = this.page.locator("(//select[@id='statesSelect'])[1]")
    }

    async clickSelectProvinciaLocalidadJoseLeonSuarez(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'joseLeonSuarez')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.click(this.SELECT_PROV_LOCALIDAD)
        await this.page.waitForTimeout(3000)
    }

    async navigateToFolletosSelectProvinciaLocalidadJoseLeonSuarez(): Promise<void> {
        await this.clickSelectProvinciaLocalidadJoseLeonSuarez()
    }
}
