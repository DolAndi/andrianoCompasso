/// <reference types="cypress" />

var bearer

import SauceLogin from "../pages/sauce_login.page"

describe("Testes de Login SwagLab", () =>{
    beforeEach(() =>{
        cy.visit(`${Cypress.env("base_url")}`)
    })

    describe("Teste de Login SwagLab COM sucesso", () =>{
        it("Deve efetuar o login correto", ()=>{
            SauceLogin.login("standard_user")
            SauceLogin.validacaoUrl()
        })
    })

    describe("Teste de Login SwagLab SEM sucesso", () =>{
        it("Deve efetuar o login com usuário incorreto", ()=>{
            SauceLogin.login("cleitinho_user")
            SauceLogin.validacaoLoginErrado()
        })
    })
}) 