export default class Stage {
  constructor(selector, size) {
    const container = document.querySelector(selector)

    const [ width, height] = size.split('x')

    this.element = document.createElement('canvas')
    this.element.setAttribute('width', width)
    this.element.setAttribute('height', height)

    this.context = this.element.getContext('2d')

    container.innerHTML = ''
    container.append(this.element)
  }

  get width() {
    return this.element.width
  }

  get height() {
    return this.element.height
  }
}
