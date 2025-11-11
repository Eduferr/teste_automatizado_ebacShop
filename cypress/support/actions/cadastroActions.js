const cadastroPage = require('../pageObjects/cadastroPage');

class CadastroActions {

  // Fluxo de cadastro
  cadastrarUsuario(usuario) {
    cy.get('.icon-user-unfollow').click();
    cadastroPage.fillForm(usuario.email, usuario.senha);
    cadastroPage.submitForm();
  }

  // Verifica se o cadastro foi realizado com sucesso
  verificarCadastroComSucesso(usuario) {
    cadastroPage.getSuccessMessageElement()
      .should('contain', `Olá, ${usuario.username} (não é ${usuario.username}? Sair)`);
  }

  // Verifica se apareceu erro de email já cadastrado
  verificarErroEmailExistente() {
    cadastroPage.getErrorMessage()
      .should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.');
  }
}

module.exports = new CadastroActions();
