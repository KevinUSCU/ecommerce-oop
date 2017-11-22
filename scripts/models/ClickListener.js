class ClickListener {
  constructor () {}

  static add (item, callback, preventDefault=true) {
    item.addEventListener('click', (event) => {
      if (preventDefault) event.preventDefault()
      callback()
    })
  }
}
