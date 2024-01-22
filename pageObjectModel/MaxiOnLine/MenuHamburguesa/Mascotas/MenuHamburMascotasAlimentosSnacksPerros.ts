import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class MenuHamburMascotasAlimentosSnacksPerros extends BasePage {

    readonly ALIMENTOS_SNACKS_PERROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALIMENTOS_SNACKS_PERROS = this.page.locator("(//div[normalize-space()='alimentos y snacks para perros'])[1]")
    }

    async clickAlimentosSnacksPerros(): Promise<void> {
        await this.click(this.ALIMENTOS_SNACKS_PERROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMascotasAlimentosSnacksPerros(): Promise<void> {
        await this.clickAlimentosSnacksPerros()
    }
}
