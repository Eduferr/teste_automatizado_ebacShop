class ComprasPage {

    selectProduct(produto) {
        cy.get('input[placeholder="Enter your search ..."]').eq(1).type(produto);
    }

    submitBusca() {
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click();
    }

    selectCaracteristica(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`).click();
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get('[name="quantity"]').clear().type(quantidade);
    }

    addToCart() {
        cy.get('.single_add_to_cart_button').click();
    }

    viewCart() {
        cy.get('.woocommerce-message > .button').click();
    }

    checkout() {
        cy.get('.checkout-button').click();
        cy.get('.showlogin').click();
    }

    selectPayment() {
        cy.get('.wc_payment_method.payment_method_cod > [name="payment_method"]').click();
        cy.get('[name="terms"]').click();
        cy.get('[name="woocommerce_checkout_place_order"]').click();
    }

    getSuccessMessageElement() {
        return cy.get('.woocommerce-message')
    }

    getSuccessMessageElementOrder() {
        return cy.get('.woocommerce-notice')
    }

}
module.exports = new ComprasPage();