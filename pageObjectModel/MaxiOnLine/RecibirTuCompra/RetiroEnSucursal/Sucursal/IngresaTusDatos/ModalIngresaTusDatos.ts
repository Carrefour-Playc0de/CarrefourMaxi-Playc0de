import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'

export class ModalIngresaTusDatos extends BasePage {

    readonly NOMBRE_APELLIDO: Locator
    readonly CUIT: Locator
    readonly CELULAR: Locator
    readonly EMAIL: Locator
    readonly BOTON_INGRESAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NOMBRE_APELLIDO = this.page.locator("//input[@placeholder='Ej: Juan Perez']")
        this.CUIT = this.page.locator("//input[@placeholder='Ej: 30112233440']")
        this.CELULAR = this.page.locator("//input[@placeholder='Ej: 011 1111 1111']")
        this.EMAIL = this.page.locator("//input[@placeholder='Ej: email@mail.com']")
        this.BOTON_INGRESAR = this.page.locator('//button [@id="btn_step3"]')
    }
    async fillCredenciales(): Promise<void> {
        await this.fill(this.NOMBRE_APELLIDO, "Grupo Test QA")
        await this.fill(this.CUIT, "20123456783")
        await this.fill(this.CELULAR, "01161234567")
        await this.fill(this.EMAIL, "mauricio_roh@carrefour.com")
    }

    async clickBotonIngresar(): Promise<void> {
        await this.click(this.BOTON_INGRESAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToModalIngresaTusDatos(): Promise<void> {
        await this.fillCredenciales()
        await this.clickBotonIngresar()
    }
}
