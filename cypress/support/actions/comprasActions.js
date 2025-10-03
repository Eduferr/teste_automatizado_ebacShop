const comprasPage = require('../page_objects/ComprasPage');

class ComprasActions {

  buscarProduto(produto) {
    comprasPage.SelectProduct(produto);
    comprasPage.submitBusca();
  }

  selecionarCaracteristica(tamanho, cor, quantidade) {
    comprasPage.selectCaracteristica(tamanho, cor, quantidade);
  }

  AdicionarAoCarrinho() {
    comprasPage.addToCart();
  }

  verCarrinho() {
    comprasPage.viewCart();
  }

  concluirCompra() {
    comprasPage.checkout();
  }

  pagarCompra() {
    comprasPage.selectPayment();
  }

  validarMensagemDeSucesso(mensagemEsperada) {
    comprasPage.getSuccessMessageElement().should('contain', mensagemEsperada);
  }

  validarMensagemDeSucessoOrder(mensagemEsperada) {
    comprasPage.getSuccessMessageElementOrder().should('contain', mensagemEsperada);
  }

}

module.exports = new ComprasActions();