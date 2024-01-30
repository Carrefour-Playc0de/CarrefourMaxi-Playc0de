import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenVerTodo extends BasePage {

    readonly ALMACEN_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALMACEN_VER_TODO = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'almacén')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickAlmacenVerTodo(): Promise<void> {
        await this.click(this.ALMACEN_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenVerTodo(): Promise<void> {
        await this.clickAlmacenVerTodo()
    }
}
