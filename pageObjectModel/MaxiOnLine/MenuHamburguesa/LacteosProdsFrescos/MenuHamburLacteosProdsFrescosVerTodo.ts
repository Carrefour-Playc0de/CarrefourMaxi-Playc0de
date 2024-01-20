import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosVerTodo extends BasePage {
    
    readonly LACTEOS_PROD_FRESCOS_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LACTEOS_PROD_FRESCOS_VER_TODO = this.page.locator("(//div[@onclick=\"gotoPage('sec', 'lácteos_y_productos_frescos')\"][normalize-space()='VER TODO'])[1]")
    }

    async clickLacteosProdsFrescosVerTodo(): Promise<void> {
        await this.click(this.LACTEOS_PROD_FRESCOS_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosVerTodo(): Promise<void> {
        await this.clickLacteosProdsFrescosVerTodo()
    }
}
