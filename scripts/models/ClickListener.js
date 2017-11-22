class ClickListener {
  constructor () {}

  static add (item, callback, preventDefault=true) {
    document.querySelector(item).addEventListener('click', (event) => {
      if (preventDefault) event.preventDefault()
      callback()
    })
  }
}
