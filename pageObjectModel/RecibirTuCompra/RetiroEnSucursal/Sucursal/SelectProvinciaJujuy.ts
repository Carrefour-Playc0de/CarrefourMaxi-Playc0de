import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class SelectProvinciaJujuy extends BasePage {

    readonly PROVINCIA_JUJUY: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PROVINCIA_JUJUY = this.page.locator("//option[@value='JUJUY']")
    }
    async clickSelectProvinciaJujuy(): Promise<void> {
        await this.click(this.PROVINCIA_JUJUY)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToSelectProvinciaJujuy(): Promise<void> {
        await this.clickSelectProvinciaJujuy()
    }
}
