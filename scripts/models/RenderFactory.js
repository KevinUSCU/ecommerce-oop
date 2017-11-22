class RenderFactory {
  constructor () {}

  render (containerId) {
    const container = document.querySelector(containerId)
    container.innerHTML = this.toHTML()
  }
}
