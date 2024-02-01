import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class NavigateMaxiCarrefour extends BasePage {

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async MainPageMaxiCarrefour(): Promise<void> {
        await this.goto(this.env.baseURL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async navigateToMaxiCarrefour(): Promise<void> {
        await this.MainPageMaxiCarrefour()
    }
}
