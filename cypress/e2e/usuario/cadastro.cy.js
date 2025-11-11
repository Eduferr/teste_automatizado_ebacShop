/// <reference types="cypress" />

const usuarioFaker = require("../../factories/usuarioFaker");
const cadastroActions = require("../../support/actions/cadastroActions");

describe('Suíte - Criar Conta de usuário', () => {

    beforeEach(() => {
        cy.visit('/');// Visita a página inicial antes de cada teste
    });

    const usuario = usuarioFaker.generateUser(); // Gera um usuário único para os testes

    it('Deve realizar o cadastro de usuário com sucesso', () => {
        cadastroActions.cadastrarUsuario(usuario);// cadastra o usuário
        cadastroActions.verificarCadastroComSucesso(usuario);// verifica se o cadastro foi bem sucedido
    });

    //Caso o teste abaixo seja rodado isoladamente, é necessário certificar que o usuário já existe
    //Caso o teste seja rodado em sequência, o usuário já terá sido criado no teste anterior
    it('Deve apresentar mensagem de ERRO para email já cadastrado', () => {
        cadastroActions.cadastrarUsuario(usuario);
        cadastroActions.verificarErroEmailExistente();
    });
});
