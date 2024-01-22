import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburMascotasHigieneAccesoriosGatos extends BasePage {

    readonly HIGIENE_ACCESORIOS_GATOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIGIENE_ACCESORIOS_GATOS = this.page.locator("(//div[normalize-space()='higiene y accesorios para gatos'])[1]")
    }

    async clickHigieneAccesoriosGatos(): Promise<void> {
        await this.click(this.HIGIENE_ACCESORIOS_GATOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMascotasHigieneAccesoriosGatos(): Promise<void> {
        await this.clickHigieneAccesoriosGatos()
    }
}
