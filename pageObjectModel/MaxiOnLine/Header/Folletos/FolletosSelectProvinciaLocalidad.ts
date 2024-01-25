import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class FolletosSelectProvinciaLocalidad extends BasePage {

    readonly SELECT_PROV_LOCALIDAD: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROV_LOCALIDAD = this.page.locator("(//select[@id='statesSelect'])[1]")
    }

    async clickSelectProvinciaLocalidad(): Promise<void> {
        await this.click(this.SELECT_PROV_LOCALIDAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    // async clickSelectProvinciaLocalidadTortuguitas(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'Tortuguitas')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadCatamarca(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'catamarca')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadChaco(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'chaco')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadCordoba(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'cordoba')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadMendoza(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'mendoza')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadEntreRios(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'entreRios')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }
    // async clickSelectProvinciaLocalidadJujuy(): Promise<void> {
    //     await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'jujuy')
    //     await this.page.waitForLoadState("domcontentloaded")
    //     await this.page.waitForFunction(() => document.readyState === 'complete')
    //     await this.click(this.SELECT_PROV_LOCALIDAD)
    //     await this.page.waitForTimeout(3000)
    // }


    async navigateToFolletosSelectProvinciaLocalidad(): Promise<void> {
        await this.clickSelectProvinciaLocalidad()
    }
}
