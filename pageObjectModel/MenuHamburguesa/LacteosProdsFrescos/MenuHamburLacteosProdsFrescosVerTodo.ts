import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosVerTodo extends BasePage {
    
    readonly LACTEOS_PROD_FRESCOS_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LACTEOS_PROD_FRESCOS_VER_TODO = this.page.locator('//span[@class="vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu"]')
    }

    async clickLacteosProdsFrescosVerTodo(): Promise<void> {
        await this.click(this.LACTEOS_PROD_FRESCOS_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburLacteosProdsFrescosVerTodo(): Promise<void> {
        await this.clickLacteosProdsFrescosVerTodo()
    }
}
