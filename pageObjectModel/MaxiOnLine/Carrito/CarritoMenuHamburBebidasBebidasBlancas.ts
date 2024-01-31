import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class CarritoMenuHamburBebidasBebidasBlancas extends BasePage {

    readonly CARRITO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARRITO = this.page.locator("(//img[@alt='Cart'])[3]")
    }

    async clickCarritos(): Promise<void> {
        //     const carritos = ['(//img[@alt="Cart"])[1]', '(//img[@alt="Cart"])[2]', '(//img[@alt="Cart"])[3]', '(//img[@alt="Cart"])[4]', '(//img[@alt="Cart"])[5]', '(//img[@alt="Cart"])[6]', '(//img[@alt="Cart"])[7]', '(//img[@alt="Cart"])[8]', '(//img[@alt="Cart"])[9]', '(//img[@alt="Cart"])[10]']
        //
        //     for (const i of carritos){
        //         await this.page.waitForSelector(i)
        //         const carrito = await this.page.$(i)
        //         await carrito.click()
        //         await this.page.waitForLoadState('domcontentloaded')
        //         await this.page.waitForFunction(() => document.readyState === 'complete')
        //         await this.page.waitForTimeout(5000)
        //     }

            for (let i = 0; i < 10; i++){
                await this.click(this.CARRITO)
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForFunction(() => document.readyState === 'complete')
                await this.page.waitForTimeout(3000)
            }

    }

    async navigateToCarritoMenuHamburBebidasBebidasBlancas(): Promise<void> {
        await this.clickCarritos()
    }
}
