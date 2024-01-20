import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaVerTodo extends BasePage {

    readonly LIMPIEZA_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_VER_TODO = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'limpieza')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickLimpiezaVerTodo(): Promise<void> {
        await this.click(this.LIMPIEZA_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaVerTodo(): Promise<void> {
        await this.clickLimpiezaVerTodo()
    }
}
