import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class FolletosSelectProvinciaLocalidad extends BasePage {

    readonly SELECT_PROV_LOCALIDAD: Locator
    // readonly AVELLANEDA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SELECT_PROV_LOCALIDAD = this.page.locator("(//select[@id='statesSelect'])[1]")
        // this.SELECT_PROV_LOCALIDAD = this.page.locator("//select[contains(@id,'statesSelect')]")
        // this.AVELLANEDA = this.page.locator("(//option[@value='avellaneda'])[1]")
        // this.AVELLANEDA = this.page.locator('//option [@value="avellaneda"]')
    }

    async clickSelectProvinciaLocalidad(): Promise<void> {
        await this.click(this.SELECT_PROV_LOCALIDAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }
    async clickSelectProvinciaLocalidadAvellaneda(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'avellaneda')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadBurzaco(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'burzaco')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadEscobar(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'escobar')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadEzpeleta(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'ezpeleta')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadItuzaingo(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'ituzaingo')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadJoseCPaz(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'joseCPaz')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadJoseLeonSuarez(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'joseLeonSuarez')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadLaferrere(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'laferrere')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadLomaHermosa(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'lomaHermosa')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadLomasdeZamora(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'lomasdeZamora')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadMoreno(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'moreno')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadPilar(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'pilar')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadSanVicente(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'sanVicente')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadTandil(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'Tandil')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadTemperley(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'Temperley')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadTigre(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'Tigre')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadTortuguitas(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'Tortuguitas')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadCatamarca(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'catamarca')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadChaco(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'chaco')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadCordoba(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'cordoba')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadMendoza(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'mendoza')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadEntreRios(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'entreRios')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async clickSelectProvinciaLocalidadJujuy(): Promise<void> {
        await this.selectOption(this.SELECT_PROV_LOCALIDAD, 'jujuy')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }


    async navigateToFolletosSelectProvinciaLocalidad(): Promise<void> {
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadAvellaneda()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadBurzaco()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadEscobar()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadEzpeleta()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadItuzaingo()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadJoseCPaz()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadJoseLeonSuarez()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadLaferrere()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadLomaHermosa()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadLomasdeZamora()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadMoreno()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadPilar()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadSanVicente()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadTandil()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadTemperley()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadTigre()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadTortuguitas()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadCatamarca()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadChaco()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadCordoba()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadMendoza()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadEntreRios()
        await this.clickSelectProvinciaLocalidad()
        await this.clickSelectProvinciaLocalidadJujuy()
        await this.clickSelectProvinciaLocalidad()
    }
}
