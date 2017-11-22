window.store = new Store()
window.store
  // Load products asynchronously
  .loadProductsAsync()
  // render products and cart
  .then(() => window.store.render('#products-container', '#cart-container'))
