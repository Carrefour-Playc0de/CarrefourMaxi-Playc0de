import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class MenuHamburAlmacenVerTodoCarritoProductos extends BasePage {

    readonly CARRITO_PRODUCTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO_PRODUCTOS = this.page.locator("(//img[@alt='Cart'])[1]")
    }

    async clickAlmacenVerTodoCarritoProductos(): Promise<void> {
        await this.click(this.CARRITO_PRODUCTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenVerTodoCarritoProductos(): Promise<void> {
        await this.clickAlmacenVerTodoCarritoProductos()
    }
}
