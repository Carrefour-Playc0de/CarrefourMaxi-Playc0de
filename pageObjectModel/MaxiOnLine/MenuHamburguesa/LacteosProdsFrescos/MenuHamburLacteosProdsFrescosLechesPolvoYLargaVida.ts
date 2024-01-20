import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida extends BasePage {

    readonly LECHES_POLVO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_POLVO = this.page.locator("(//div[normalize-space()='leches en polvo y larga vida'])[1]")
    }

    async clickLacteosProdsFrescosLechesPolvoYLargaVida(): Promise<void> {
        await this.click(this.LECHES_POLVO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesPolvoYLargaVida(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesPolvoYLargaVida()
    }
}
