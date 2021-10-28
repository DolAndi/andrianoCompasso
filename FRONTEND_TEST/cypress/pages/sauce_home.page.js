
import Base from "./_base.page" 

const URL                   ='/inventory.html';                         
const URL_ITEM              = 'inventory-item.html';
const URL_SOBRE             = 'saucelab';
const URL_LOGOUT            = 'saucedemo';
const SELETOR_HOME          = '[data-test=product_sort_container]';
const FIRST_ITEM            = '#item_4_img_link > .inventory_item_img';
const BURGER_MENU           = '#react-burger-menu-btn';
const BURGER_MENU_INVENTORY = '#inventory_sidebar_link';
const BURGER_MENU_RESET     = '#reset_sidebar_link';
const BURGER_MENU_SOBRE     = '#about_sidebar_link';
const BURGER_MENU_LOGOUT    = '#logout_sidebar_link';                   
const CART_BUTTON           = '#shopping_cart_container'
const CART_ADD              ='[data-test=add-to-cart-sauce-labs-backpack]'
const CART_ELEMENT          ='.cart_item > div >a'
const CART_ITEM             ='item_4_title_link'

export default class SauceHome extends Base {

    static acessarSL () {
        cy.visit(`${Cypress.env("base_url")}`)

    }
    static organizadorProdutos(arrayP){
        super.waitElementAndSelectOption(SELETOR_HOME, arrayP)
    }

    static menuAcessoBurguer () {
        super.clickOnElement(BURGER_MENU)
        super.clickOnElement(BURGER_MENU_RESET)      
    }

    static menuLogout () {
        super.clickOnElement(BURGER_MENU)
        super.clickOnElement(BURGER_MENU_LOGOUT)
        super.validarUrl(URL_LOGOUT)
    
    }

    static menuSobre () {
        super.clickOnElement(BURGER_MENU)
        super.clickOnElement(BURGER_MENU_SOBRE)
        super.validarUrl(URL_SOBRE)
    
    }

    static menuAllItems () {
        super.clickOnElement(FIRST_ITEM)
        super.validarUrl(URL_ITEM)
        super.clickOnElement(BURGER_MENU)
        super.clickOnElement(BURGER_MENU_INVENTORY)
        super.validarUrl(URL)
    }
    
}