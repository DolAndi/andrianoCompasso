
import Base from "./_base.page"

const INP_USERNAME          = '#user-name'
const INP_PASSWORD          = '#password'
const BTN_LOGIN             = '#login-button'
const TXT_ERROR             = '[data-test=error]'
const URL                   = '/inventory.html'
const LOGIN_CREDENTIAL      = '#login_credentials'
const PASSWORD_CREDENTIAL   = '.login_password'
const LOGO                  = '.login_logo'

export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit(`${Cypress.env("base_url")}`)
    }

    static login(usuario){
        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, "secret_sauce")
        super.clickOnElement(BTN_LOGIN)
    }
    static validacaoUrl(){
        super.validarUrl(URL)
    }

    static validacaoLoginErrado(){
        super.validateElementText(TXT_ERROR, "Epic sadface: Username and password do not match any user in this service")
    }

    static validacaoLogo(){
        super.validacaoExistenciaVisibilidade(LOGO)
    }

    static validarLoginCredentials(){
        super.validacaoExistenciaVisibilidade(LOGIN_CREDENTIAL)
        super.validacaoExistenciaVisibilidade(PASSWORD_CREDENTIAL)
    }
}