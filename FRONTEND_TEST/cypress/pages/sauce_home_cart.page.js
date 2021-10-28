
import Base from './_base.page' 
import faker from 'faker';

const CART_URL              = 'cart.html'
const CHECKOUT_FINISHED_URL ='checkout-complete.html'
const SELETOR_HOME          = '[data-test=product_sort_container]';             
const CART_BUTTON           = '#shopping_cart_container'
const CART_ADD              ='[data-test=add-to-cart-sauce-labs-backpack]'
const CART_ELEMENT          ='.cart_item > div >a'
const CART_ITEM             ='item_4_title_link'
const ARRAY_PRODUTOS        ='.inventory_list'
const NUM_CART              = '.shopping_cart_badge'
const CHECKOUT_CART         ='[data-test=checkout]'
const CHECKOUT_NAME         ='[data-test=firstName]'
const CHECKOUT_LAST_NAME    ='[data-test=lastName]' 
const CHECKOUT_ZIP_CODE     ='[data-test=postalCode]'
const CHECKOUT_BTN          ='[data-test=continue]'
const CHECKOUT_SUMMARY      = '.summary_info'
const CHECKOUT_FINISHED     ='[data-test=finish]'
const TXT_ERROR          ='[data-test=error]'

export default class SauceHomeCart extends Base {
    static addCartItem(){
        super.validacaoExistenciaVisibilidade(CART_ADD)
        super.validacaoExistenciaVisibilidade(CART_BUTTON)

        super.clickOnElement(CART_ADD)
        super.clickOnElement(CART_BUTTON)
    
        super.validacaoExistenciaVisibilidade(CHECKOUT_CART)

        super.validarConteudoDoElemento(NUM_CART, 1)
        super.clickOnElement(CHECKOUT_CART)
    }
    static checkoutProduto(){

        super.validacaoExistenciaVisibilidade(CHECKOUT_NAME)
        super.validacaoExistenciaVisibilidade(CHECKOUT_LAST_NAME)
        super.validacaoExistenciaVisibilidade(CHECKOUT_ZIP_CODE)
        super.validacaoExistenciaVisibilidade(CHECKOUT_BTN)

        super.typeValue(CHECKOUT_NAME, `${faker.name.firstName()}`)
        super.typeValue(CHECKOUT_LAST_NAME, `${faker.name.lastName()}`)
        super.typeValue(CHECKOUT_ZIP_CODE, `${faker.address.zipCode()}`)

        super.clickOnElement(CHECKOUT_BTN)

        super.validacaoExistenciaVisibilidade(CHECKOUT_SUMMARY)
        super.validacaoExistenciaVisibilidade(CHECKOUT_FINISHED)
        super.validarConteudoDoElemento(CHECKOUT_SUMMARY,'Payment Information:')
        super.clickOnElement(CHECKOUT_FINISHED)

        super.validacaoExistenciaVisibilidade('.pony_express')

    }
}