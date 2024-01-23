import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPanaderiaVerTodos extends BasePage {

    readonly PANADERIA_VER_TODOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANADERIA_VER_TODOS = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'panadería')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickPanaderiaVerTodos(): Promise<void> {
        await this.click(this.PANADERIA_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaVerTodos(): Promise<void> {
        await this.clickPanaderiaVerTodos()
    }
}
