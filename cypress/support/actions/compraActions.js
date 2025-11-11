const comprasPage = require('../pageObjects/compraPage')

class ComprasActions {

  buscarProduto(produto) {
    comprasPage.selectProduct(produto);
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