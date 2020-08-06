const COLOR = 'rgba(255, 255, 255, 1)'
const WIDTH = 1

export default class Wall {
  constructor(gameObjects, startPosition, endPosition) {
    this.gameObjects = gameObjects

    this.startPosition = startPosition
    this.endPosition = endPosition
  }

  draw() {
    const context = this.gameObjects.canvas.context

    context.beginPath()

    context.moveTo(this.startPosition.x, this.startPosition.y)
    context.lineTo(this.endPosition.x, this.endPosition.y)

    context.strokeStyle = COLOR
    context.lineWidth = WIDTH

    context.closePath()
    context.stroke()
  }
}
