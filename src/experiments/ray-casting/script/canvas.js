import Utils from './utils.js'

const BACKGROUD_COLOR = 'rgba(214, 48, 49,1.0)'

export default class Canvas {
  constructor(gameObjects, selector) {
    this.gameObjects = gameObjects

    const container = document.querySelector(selector)

    this.element = document.createElement('canvas')
    this.element.setAttribute('width', 1280)
    this.element.setAttribute('height', 720)

    this.context = this.element.getContext('2d', { alpha: false })

    this.center = Utils.vector2(
      this.element.width / 2,
      this.element.height / 2
    )

    this.element.style.cursor = 'none'

    container.append(this.element)
  }

  draw() {
    this.clear()
  }

  clear() {
    this.context.fillStyle = BACKGROUD_COLOR
    this.context.fillRect(0, 0, this.element.width, this.element.height)
  }
}
