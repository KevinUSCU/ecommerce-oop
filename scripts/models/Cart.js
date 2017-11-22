class Cart extends RenderFactory {
  constructor () {
    super()
    this.products = []
  }

  add (product) {
    this.products.push(product)
  }

  toHTML () {
    return `
      <a class="nav-link text-white" href="#">
        Shopping Cart
        <span class="badge badge-light">${this.products.length}</span>
      </a>
    `
  }
}
