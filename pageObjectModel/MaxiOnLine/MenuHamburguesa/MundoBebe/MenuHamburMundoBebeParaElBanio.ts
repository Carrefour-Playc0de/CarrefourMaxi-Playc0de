import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburMundoBebeParaElBanio extends BasePage {

    readonly PARA_EL_BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARA_EL_BANIO = this.page.locator("(//div[normalize-space()='para el baño'])[1]")
    }

    async clickMundoBebeParaElBanio(): Promise<void> {
        await this.click(this.PARA_EL_BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeParaElBanio(): Promise<void> {
        await this.clickMundoBebeParaElBanio()
    }
}
