const LoginPage = require("../page_objects/LoginPage");
const UsuarioFaker = require("../../factories/usuarioFaker");
const { faker } = require("@faker-js/faker");

class LoginActions {
    // login com credenciais válidas
    loginComCredenciaisValidas() {
        const email = Cypress.env('email');
        const senha = Cypress.env('senha');
        //console.log('DEBUG email:', email, 'senha:', senha);
        LoginPage.acessarLogin(email, senha);
        LoginPage.submitLogin();
    }
    // login com credenciais inválidas
    loginComCredenciaisInvalidas(email, senha) {
        // Se email invalido não foi passado, gera um email faker
        const emailInvalido = email || faker.internet.email();
        LoginPage.acessarLogin(emailInvalido, senha);
        LoginPage.submitLogin();
    }

    verificarLoginComSucesso(usuario) {
        LoginPage.getSuccessMessageElement()
            .should('contain', `Olá, ${usuario.username} (não é ${usuario.username}? Sair)`);
    }

    verificarErroUsuarioObrigatorio() {
        LoginPage.getErrorMessage()
            .should('contain', 'Erro: Nome de usuário é obrigatório.');
    }

    verificarErroEmailInvalido() {
        LoginPage.getErrorMessage()
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    }

    verificarErroSenhaIncorreta(email) {
        LoginPage.getErrorMessage()
            .should('contain', `Erro: A senha fornecida para o e-mail ${email} está incorreta. Perdeu a senha?`);
    }

    verificarErroSenhavazio() {
        LoginPage.getErrorMessage()
            .should('contain', 'Erro: O campo da senha está vazio.');
    }
}

module.exports = new LoginActions();