/// <reference types="cypress" />

var bearer

describe("Teste de Login SwagLab", () =>{
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com")
    })
    it("Deve efetuar o login correto", ()=>{
        cy.login()
    })
    it("Deve efetuar o login com usuário incorreto", ()=>{
        cy.loginUsuarioErrado()
    })
    it("Deve efetuar o login com senha incorreta", ()=>{
        cy.loginSenhaErrada()
    })
}) 