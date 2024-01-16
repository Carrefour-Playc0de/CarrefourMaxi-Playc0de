import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaEntreRios extends BasePage {

    readonly PROVINCIA_ENTRE_RIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_ENTRE_RIOS = this.page.locator("//option[@value='ENTRE RIOS']")
    }
    async clickSelectProvinciaEntreRios(): Promise<void> {
        await this.click(this.PROVINCIA_ENTRE_RIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaEntreRios(): Promise<void> {
        await this.clickSelectProvinciaEntreRios()
    }
}
