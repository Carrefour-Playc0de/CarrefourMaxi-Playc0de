import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaLavandinas extends BasePage {

    readonly LAVANDINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAVANDINAS = this.page.locator("(//div[normalize-space()='lavandinas'])[1]")
    }

    async clickLavandinas(): Promise<void> {
        await this.click(this.LAVANDINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLavandinas(): Promise<void> {
        await this.clickLavandinas()
    }
}
