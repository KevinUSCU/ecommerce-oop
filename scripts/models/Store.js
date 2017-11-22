class Store {
  constructor (productsContainerId, cartContainerId) {
    this.cart = new Cart()
    this.productsContainerId = productsContainerId
    this.cartContainerId = cartContainerId
  }

  addToCart (product) {
    this.cart.add(product)
    this.cart.render(this.cartContainerId)
  }

  loadProductsAsync () {
    return ProductAPI.get().then(({ data }) => this.productsList = new ProductList(data))
  }

  render () {
    this.cart.render(this.cartContainerId)
    this.productsList.render(this.productsContainerId)
  }
}
