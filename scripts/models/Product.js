class Product {
  constructor ({ id, size, price, description }) {
    this.id = id
    this.size = size
    this.price = price
    this.description = description
  }

  toHTML () {
    return `
      <div class="col">
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">${this.price}</h6>
            <p class="card-text">${this.description}</p>
            <a href="#" data-id="${this.id}" class="card-link">Add to Cart</a>
          </div>
        </div>
      </div>
    `
  }

  addEventListeners () {
    const product = document.querySelector(`[data-id="${this.id}"]`)
    product.addEventListener('click', (event) => {
      event.preventDefault()
      window.store.addToCart(this)
    })
  }
}
