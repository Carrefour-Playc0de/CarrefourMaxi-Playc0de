import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaPisosMuebles extends BasePage {

    readonly LIMPIEZA_PISOS_MUEBLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_PISOS_MUEBLES = this.page.locator("(//div[normalize-space()='limpieza de pisos y muebles'])[1]")
    }

    async clickLimpiezaPisosMuebles(): Promise<void> {
        await this.click(this.LIMPIEZA_PISOS_MUEBLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaLimpiezaPisosMuebles(): Promise<void> {
        await this.clickLimpiezaPisosMuebles()
    }
}
