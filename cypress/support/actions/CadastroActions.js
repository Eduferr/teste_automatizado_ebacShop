const CadastroPage = require('../page_objects/CadastroPage');

class CadastroActions {

  // Fluxo de cadastro
  cadastrarUsuario(usuario) {
    cy.get('.icon-user-unfollow').click();
    CadastroPage.fillForm(usuario.email, usuario.senha);
    CadastroPage.submitForm();
  }

  // Verifica se o cadastro foi realizado com sucesso
  verificarCadastroComSucesso(usuario) {
    CadastroPage.getSuccessMessageElement()
      .should('contain', `Olá, ${usuario.username} (não é ${usuario.username}? Sair)`);
  }

  // Verifica se apareceu erro de email já cadastrado
  verificarErroEmailExistente() {
    CadastroPage.getErrorMessage()
      .should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.');
  }
}

module.exports = new CadastroActions();
