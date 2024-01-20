import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburDesayunoMeriendaVerTodo extends BasePage {

    readonly DESAYUNO_MERIENDA_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESAYUNO_MERIENDA_VER_TODO = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'desayuno_y_merienda')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickDesayunoMeriendaVerTodo(): Promise<void> {
        await this.click(this.DESAYUNO_MERIENDA_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaVerTodo(): Promise<void> {
        await this.clickDesayunoMeriendaVerTodo()
    }
}
