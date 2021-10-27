/// <reference types="cypress" />

var bearer

describe("Testes de Login SwagLab", () =>{
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com")
    })
    describe("Teste de Login SwagLab COM sucesso", () =>{
        it("Deve efetuar o login correto", ()=>{
            cy.login()
        })
    })
    describe("Teste de Login SwagLab SEM sucesso", () =>{
        it("Deve efetuar o login com usuário incorreto", ()=>{
            cy.loginUsuarioErrado()
        })
        it("Deve efetuar o login com senha incorreta", ()=>{
            cy.loginSenhaErrada()
        })
    })
}) 