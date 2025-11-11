class CadastroPage {

  // Preenche o formulário de cadastro
  fillForm(email, senha) {
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
  }

  // Envia o formulário
  submitForm() {
    cy.get('[name="register"]').click();
  }

  // Retorna o elemento de erro
  getErrorMessage() {
    return cy.get('.woocommerce-error');
  }

  // Retorna o elemento de login/sucesso
  getSuccessMessageElement() {
    return cy.get('.woocommerce-MyAccount-content > :nth-child(2)');
  }
}

module.exports = new CadastroPage();

