import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class CarritoMenuHamburAlmacenVerTodo extends BasePage {

    readonly CARRITO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO = this.page.locator("(//img[@alt='Cart'])[i]")
    }

    async clickCarritos(): Promise<void> {
        for (let i = 0; i<10; i++){
            await this.click(this.CARRITO)
            await this.page.waitForLoadState("domcontentloaded")
            await this.page.waitForFunction(() => document.readyState === 'complete')
            await this.page.waitForTimeout(3000)
        }

    }

    async navigateToCarritoMenuHamburAlmacenVerTodo(): Promise<void> {
        await this.clickCarritos()
    }
}
