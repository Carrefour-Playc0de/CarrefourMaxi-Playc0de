import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburAlmacenArroz extends BasePage {

    readonly ARROZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARROZ = this.page.locator("//div[@class='itm3'][normalize-space()='bebidas']")
    }

    async clickAlmacenArroz(): Promise<void> {
        await this.click(this.ARROZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburAlmacenArroz(): Promise<void> {
        await this.clickAlmacenArroz()
    }
}
