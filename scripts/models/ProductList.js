class ProductList {
  constructor (productsInfo) {
    this.products = productsInfo.map(info => new Product(info))
  }

  toHTML () {
    return this.products.map(product => product.toHTML()).join('')
  }

  render (containerId) {
    const container = document.querySelector(containerId)
    container.innerHTML = this.toHTML()
    this.products.forEach(product => product.addEventListeners())
  }
}
