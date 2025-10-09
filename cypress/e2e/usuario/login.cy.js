/// <reference types="cypress" />

const loginActions = require("../../support/actions/loginActions")

describe('Suíte - Testes Login', () => {

    beforeEach(() => {
        cy.visit('/minha-conta');
    });

    it('Deve realizar o login com sucesso', () => {
        loginActions.loginComCredenciaisValidas();
        loginActions.verificarLoginComSucesso({
            username: Cypress.env('nome')
        });
    });

    it('Deve exibir erro ao tentar logar sem informar o usuário', () => {
        loginActions.loginComCredenciaisInvalidas(" ", 'senha123');
        loginActions.verificarErroUsuarioObrigatorio();
    })

    it('Deve exibir erro ao tentar logar com email inválido', () => {
        loginActions.loginComCredenciaisInvalidas("", "senha123");
        loginActions.verificarErroEmailInvalido();
    })

    it('Deve exibir erro ao tentar logar com senha incorreta', () => {
        loginActions.loginComCredenciaisInvalidas(Cypress.env('email'), "senhaIncorreta");
        loginActions.verificarErroSenhaIncorreta(Cypress.env('email'));

    })

    it('Deve exibir erro ao tentar logar com o campo senha vazio', () => {
        loginActions.loginComCredenciaisInvalidas(Cypress.env('email'), " ");
        loginActions.verificarErroSenhavazio();

    })

});