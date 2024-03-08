import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburOfertasVerTodos extends BasePage {

    readonly OFERTAS_VER_TODOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OFERTAS_VER_TODOS = this.page.locator("(//div[@onclick=\"gotoPage('sale', '', 'Ofertas')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickOfertasVerTodos(): Promise<void> {
        await this.click(this.OFERTAS_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburOfertasVerTodos(): Promise<void> {
        await this.clickOfertasVerTodos()
    }
}
