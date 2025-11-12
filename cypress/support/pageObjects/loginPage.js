class LoginPage {

    acessarLogin(email, senha) {
        cy.get('#username').type(email);
        cy.get('#password').type(senha,{ log: false }); //log false para não exibir a senha no console
    }

    submitLogin() {
        cy.get('[name="login"]').click();
    }

    getErrorMessage() {
        return cy.get('.woocommerce-error', {timeout: 20000});
    }

    getSuccessMessageElement() {
        return cy.get('.woocommerce-MyAccount-content > :nth-child(2)', {timeout: 10000});
    }
}


module.exports = new LoginPage();