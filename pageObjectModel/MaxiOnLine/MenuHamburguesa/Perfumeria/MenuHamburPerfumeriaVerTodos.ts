import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburPerfumeriaVerTodos extends BasePage {

    readonly PERFUMERIA_VER_TODOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PERFUMERIA_VER_TODOS = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'perfumería')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickPerfumeriaVerTodos(): Promise<void> {
        await this.click(this.PERFUMERIA_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaVerTodos(): Promise<void> {
        await this.clickPerfumeriaVerTodos()
    }
}
