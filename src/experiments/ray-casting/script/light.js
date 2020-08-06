import Utils from './utils.js'

const SIZE = 10
const COLOR = 'rgba(255, 255, 255, .5)'

export default class Light {
  constructor(gameObjects) {
    this.gameObjects = gameObjects
    this.size = SIZE
    this.color = COLOR

    this.setPosition(this.gameObjects.canvas.center.x - (this.size / 2), this.gameObjects.canvas.center.y - (this.size / 2))

    this.gameObjects.canvas.element.addEventListener('mousemove', event => this.setPosition(event.offsetX, event.offsetY))
  }

  draw() {
    const context = this.gameObjects.canvas.context

    context.beginPath()

    context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
    context.fillStyle = this.color
    context.fill()

    context.closePath()
  }

  setPosition(x, y) {
    this.position = Utils.vector2(
      x || this.position.x,
      y || this.position.y
    )
  }
}
