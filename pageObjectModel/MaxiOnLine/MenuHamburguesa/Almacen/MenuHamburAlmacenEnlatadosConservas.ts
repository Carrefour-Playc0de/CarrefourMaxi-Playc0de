import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenEnlatadosConservas extends BasePage {

    readonly ENLATADOS_CONSERVAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENLATADOS_CONSERVAS = this.page.locator("//div[normalize-space()='enlatados y conservas']")
    }

    async clickAlmacenEnlatadosConservas(): Promise<void> {
        await this.click(this.ENLATADOS_CONSERVAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenEnlatadosConservas(): Promise<void> {
        await this.clickAlmacenEnlatadosConservas()
    }
}
