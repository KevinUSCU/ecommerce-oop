window.store = new Store('#products-container', '#cart-container')
window.store
  // Load products asynchronously
  .loadProductsAsync()
  // render products and cart
  .then(() => window.store.render())
