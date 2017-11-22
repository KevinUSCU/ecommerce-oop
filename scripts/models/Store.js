class Store {
  constructor () {
    this.cart = new Cart()
  }

  loadProductsAsync () {
    return ProductAPI.get().then(({ data }) => this.productsList = new ProductList(data))
  }

  render (productsContainerId, cartContainerId) {
    this.cart.render(cartContainerId)
    this.productsList.render(productsContainerId)
  }
}
