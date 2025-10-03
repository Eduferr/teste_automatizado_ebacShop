class LoginPage {

    acessarLogin(email, senha) {
        cy.get('#username').type(email);
        cy.get('#password').type(senha,{ log: false });
    }

    submitLogin() {
        cy.get('[name="login"]').click();
    }

    getErrorMessage() {
        return cy.get('.woocommerce-error');
    }

    getSuccessMessageElement() {
        return cy.get('.woocommerce-MyAccount-content > :nth-child(2)');
    }
}

module.exports = new LoginPage();