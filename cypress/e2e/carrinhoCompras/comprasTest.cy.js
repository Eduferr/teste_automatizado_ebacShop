/// <reference types="cypress" />

const comprasActions = require('../../support/actions/comprasActions');
const ComprasActions = require('../../support/actions/comprasActions');
const loginactions = require('../../support/actions/loginactions');

describe('Suíte - Carrinho de Compras', () => {

    beforeEach(() => {
        cy.visit('/produtos'); // Visita a página inicial antes de cada teste
    });

    it.only('Deve efetuar a compra buscando pelo nome do produto', () => {
        cy.fixture('produtos').then((produtos) => {// Importa os dados do arquivo JSON
            const produto = produtos[0];

        comprasActions.buscarProduto(produto.nome);
        comprasActions.selecionarCaracteristica(produto.tamanho, produto.cor, produto.quantidade);
        comprasActions.AdicionarAoCarrinho();
        comprasActions.validarMensagemDeSucesso(`${produto.quantidade} × “${produto.nome}” foram adicionados no seu carrinho.`);
        comprasActions.verCarrinho();
        comprasActions.concluirCompra();
        loginactions.loginComCredenciaisValidas();
        comprasActions.pagarCompra();
        comprasActions.validarMensagemDeSucessoOrder('Obrigado. Seu pedido foi recebido.');
        });
    });

    it('Deve efetuar a compra selecionando o item na lista de produtos', () => {
        //TODO
    });

    

});