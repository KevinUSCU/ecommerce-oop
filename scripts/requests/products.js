window.ProductAPI = {
  get () {
    return axios.get('https://student-apis.herokuapp.com/gcommerce/products')
  }
}
