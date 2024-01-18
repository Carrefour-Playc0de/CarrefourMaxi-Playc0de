import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class IngresarCuenta extends BasePage {

    readonly ICONO_INGRESAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ICONO_INGRESAR = this.page.locator("//span[normalize-space()='Ingresar']")
    }
    async clickIconoIngresarCuenta(): Promise<void> {
        await this.click(this.ICONO_INGRESAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToIngresarCuenta(): Promise<void> {
        await this.clickIconoIngresarCuenta()
    }
}
