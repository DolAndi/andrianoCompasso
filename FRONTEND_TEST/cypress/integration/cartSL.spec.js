/// <reference types = "cypress"/>

import SauceHome from '../pages/sauce_home.page'
import SauceHomeCart from '../pages/sauce_home_cart.page'

describe("Testes do funcionamento do carrinho", () => {
    it("Deve adicionar produto ao carrinho", ()=>{
        SauceHome.acessarSL()
        cy.login()
        SauceHomeCart.addCartItem()
    })

    it("Deve realizar o checkout do produto no carrinho com sucesso", () => {
        SauceHome.acessarSL()
        cy.login()
        SauceHomeCart.addCartItem()
        SauceHomeCart.checkoutProduto()
    })
})