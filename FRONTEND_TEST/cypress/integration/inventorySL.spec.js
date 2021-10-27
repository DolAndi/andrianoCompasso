/// <reference types="cypress" />

var bearer

describe("Testes de verificação do funcionamento do Inventory", () =>{
    describe("Teste da realização da seleção de ordenação", () =>{
        it("Deve verificar se funciona corretamente o seletor de ordenação", ()=>{
            cy.visit("https://www.saucedemo.com")
            cy.login()
            for (let i = 0; i < 4; i++) {

                cy.selecaoOrdenacao(i)
                }
        })   
    })                
    describe("Testes de navegação do menu", () =>{
        beforeEach(() =>{
    
            cy.visit("https://www.saucedemo.com")
            cy.login()
        })
       
        it("Deve verificar funcionamento do burguer menu", ()=>{
            cy.get("#react-burger-menu-btn").click();
        })

        it("Deve verificar o burguer menu na aba Logout", ()=>{
           cy.menuLogout()
        })
    
        it("Deve verificar o burguer menu na aba Sobre", ()=>{
            cy.menuSobre()
        })
    
    })
}) 



