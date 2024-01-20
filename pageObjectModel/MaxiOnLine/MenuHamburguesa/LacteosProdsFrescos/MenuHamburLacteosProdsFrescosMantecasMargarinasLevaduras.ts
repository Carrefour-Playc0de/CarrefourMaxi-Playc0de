import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras extends BasePage {

    readonly Mantecas_Margarinas_Levaduras: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.Mantecas_Margarinas_Levaduras = this.page.locator("(//div[normalize-space()='mantecas, margarinas y levaduras'])[1]")
    }

    async clickLacteosProdsFrescosMantecasMargarinasLevaduras(): Promise<void> {
        await this.click(this.Mantecas_Margarinas_Levaduras)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras(): Promise<void> {
        await this.clickLacteosProdsFrescosMantecasMargarinasLevaduras()
    }
}
