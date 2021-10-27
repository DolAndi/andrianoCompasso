
export default class SauceLogin {

    static acessarSauceDemo(){
        cy.visit(`${Cypress.env("base_url")}`)
    }

}