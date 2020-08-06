import Canvas from './canvas.js'
import Light from './light.js'
import Walls from './walls.js'
import Rays from './rays.js'

export default class Game {
  constructor(selector, options) {
    this.gameObjects = {}

    this.gameObjects.canvas = new Canvas(this.gameObjects, selector)
    this.gameObjects.walls = new Walls(this.gameObjects)
    this.gameObjects.rays = new Rays(this.gameObjects, options.numberOfRays)
    this.gameObjects.light = new Light(this.gameObjects)

    this.gameLoop()
  }

  get gameObjectArray() {
    return Object.values(this.gameObjects)
  }

  gameLoop() {
    this.updateAllGameObjects()
    this.drawAllGameObjects()

    window.requestAnimationFrame(() => this.gameLoop())
  }

  updateAllGameObjects() {
    for (const gameObject of this.gameObjectArray) {
      if (gameObject.update) {
        gameObject.update()
      }
    }
  }

  drawAllGameObjects() {
    for (const gameObject of this.gameObjectArray) {
      if (gameObject.draw) {
        gameObject.draw()
      }
    }
  }
}
