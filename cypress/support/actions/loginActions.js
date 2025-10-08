const loginPage = require("../pageObjects/loginPage");
const UsuarioFaker = require("../../factories/usuarioFaker");
const { faker } = require("@faker-js/faker");

class LoginActions {
    // login com credenciais válidas
    loginComCredenciaisValidas() {
        //const email = Cypress.env('email');
        //const senha = Cypress.env('senha');
        //console.log('DEBUG email:', email, 'senha:', senha);
        //loginPage.acessarLogin(email, senha);
        loginPage.acessarLogin("qatester@gmail.com", "654321");
        loginPage.submitLogin();
    }
    // login com credenciais inválidas
    loginComCredenciaisInvalidas(email, senha) {
        // Se email invalido não foi passado, gera um email faker
        const emailInvalido = email || faker.internet.email();
        loginPage.acessarLogin(emailInvalido, senha);
        loginPage.submitLogin();
    }

    verificarLoginComSucesso(usuario) {
        loginPage.getSuccessMessageElement()
            .should('contain', `Olá, qatester-7206 (não é qatester-7206? Sair)`);
            //.should('contain', `Olá, ${usuario.username} (não é ${usuario.username}? Sair)`);
    }

    verificarErroUsuarioObrigatorio() {
        loginPage.getErrorMessage()
            .should('contain', 'Erro: Nome de usuário é obrigatório.');
    }

    verificarErroEmailInvalido() {
        loginPage.getErrorMessage()
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    }

    verificarErroSenhaIncorreta(email) {
        loginPage.getErrorMessage()
            .should('contain', `Erro: A senha fornecida para o e-mail ${email} está incorreta. Perdeu a senha?`);
    }

    verificarErroSenhavazio() {
        loginPage.getErrorMessage()
            .should('contain', 'Erro: O campo da senha está vazio.');
    }
}

module.exports = new LoginActions();