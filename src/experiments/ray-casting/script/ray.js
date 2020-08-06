import Utils from './utils.js'

const RAY_LENGTH = 999999
const COLOR = 'rgba(255, 118, 117, .4)'
const WIDTH = 2

export default class Ray {
  constructor(gameObjects, degrees) {
    this.gameObjects = gameObjects
    this.endPosition = null

    this.radians = Utils.degreesToRadians(degrees)
  }

  static calculateRayLine(position, radians) {
    return Utils.vector2(
      position.x + RAY_LENGTH * Math.cos(radians),
      position.y + RAY_LENGTH * Math.sin(radians)
    )
  }

  update() {
    const ray = Ray.calculateRayLine(this.gameObjects.light.position, this.radians)

    const collision = this.gameObjects.walls.checkWallsCollision({
      startPosition: this.gameObjects.light.position,
      endPosition: ray
    })

    if (collision) {
      this.endPosition = collision
    } else {
      this.endPosition = ray
    }
  }

  draw() {
    const context = this.gameObjects.canvas.context

    context.beginPath()

    context.moveTo(this.gameObjects.light.position.x, this.gameObjects.light.position.y)
    context.lineTo(this.endPosition.x, this.endPosition.y)

    context.strokeStyle = COLOR
    context.lineWidth = WIDTH

    context.closePath()
    context.stroke()
  }
}
