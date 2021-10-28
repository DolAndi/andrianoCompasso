/// <reference types="cypress" />

var bearer

import SauceHome from "../pages/sauce_home.page"

describe("Testes de verificação do funcionamento do Inventory", () => {

    describe("Teste da realização da seleção de ordenação", () => {
    
        it("Deve verificar o funcionamento corretamente da seleção de ordenação", ()=>{
            SauceHome.acessarSL()
            cy.login()
            for (let i = 0; i < 4; i++) {
                     SauceHome.organizadorProdutos(i)
            }
        }) 
    })

    describe("Testes de navegação do menu", () => {
        beforeEach(() =>{
    
            SauceHome.acessarSL()
            cy.login()
        })
       
        it("Deve verificar funcionamento do burguer menu", () => {
            SauceHome.menuAcessoBurguer()
        })

        it("Deve verificar o burguer menu na aba Logout", () => {
            SauceHome.menuLogout()
        })
    
        it("Deve verificar o burguer menu na aba Sobre", () => {
            SauceHome.menuSobre()
        })
        it("Deve verificar o burguer menu do All Items ", () => {
            SauceHome.menuAllItems()
        })
    
    })
}) 
