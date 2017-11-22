class ProductList extends RenderFactory {
  constructor (productsInfo) {
    super()
    this.products = productsInfo.map(info => new Product(info))
  }

  toHTML () {
    return this.products.map(product => product.toHTML()).join('')
  }

  render (containerId) {
    super.render(containerId)
    this.products.forEach(product => product.addEventListeners())
  }
}
