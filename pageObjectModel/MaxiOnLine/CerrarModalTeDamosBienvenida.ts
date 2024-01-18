import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class CerrarModalTeDamosBienvenida extends BasePage {

    readonly CRUZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CRUZ = this.page.locator('//img [@class="btn_access__img1 w-img cursor_pointer"]')
    }

    async MainPage(): Promise<void> {
        await this.goto(this.env.baseURL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickXModalTeDamosBienvenida(): Promise<void> {
        await this.click(this.CRUZ)
    }

    async navigateToMainPageAndCerrarModalTeDamosBienvenida(): Promise<void> {
        await this.MainPage()
        await this.clickXModalTeDamosBienvenida()
    }
}
