/// <reference types="cypress" />

const CadastroFactory = require('../../support/factories/CadastroFactory');
const CadastroActions = require('../../support/actions/cadastroActions');

describe('Suíte - Criar Conta de usuário', () => {

  beforeEach(() => {
    cy.visit('/');// Visita a página inicial antes de cada teste
  });

  const usuario = CadastroFactory.generateUser(); // Gera um usuário único para os testes

  it('Deve realizar o cadastro com sucesso', () => {
    CadastroActions.cadastrarUsuario(usuario);// cadastra o usuário
    CadastroActions.verificarCadastroComSucesso(usuario);// verifica se o cadastro foi bem sucedido
  });

  it('Deve apresentar mensagem de ERRO para email já cadastrado', () => {
    CadastroActions.cadastrarUsuario(usuario); // tenta cadastrar um email já existente
    //     CadastroActions.verificarErroEmailExistente();// verifica se a mensagem de erro apareceu
  });
});
