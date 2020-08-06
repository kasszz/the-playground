import Utils from './utils.js'
import Collision from './collision.js'
import Wall from './wall.js'

export default class Walls {
  constructor(gameObjects) {
    this.gameObjects = gameObjects
    this.walls = [
      new Wall(gameObjects, Utils.vector2(50, 50), Utils.vector2(190, 394)),
      new Wall(gameObjects, Utils.vector2(500, 400), Utils.vector2(400, 350)),
      new Wall(gameObjects, Utils.vector2(600, 250), Utils.vector2(550, 350)),
      new Wall(gameObjects, Utils.vector2(1100, 34), Utils.vector2(900, 500)),
      new Wall(gameObjects, Utils.vector2(1100, 34), Utils.vector2(900, 500)),

      new Wall(gameObjects, Utils.vector2(700, 550), Utils.vector2(700, 650)),
      new Wall(gameObjects, Utils.vector2(700, 650), Utils.vector2(600, 650)),
      new Wall(gameObjects, Utils.vector2(600, 650), Utils.vector2(600, 550)),
    ]
  }

  draw() {
    for (const wall of this.walls) {
      wall.draw()
    }
  }

  checkWallsCollision(gameObject) {
    let closestWall = null

    for (const wall of this.walls) {
      const collision = Collision.line(gameObject, wall)

      if (collision) {
        const distance = Math.hypot(collision.x - gameObject.startPosition.x, collision.y - gameObject.startPosition.y)

        if(!closestWall || closestWall.distance > distance) {
          closestWall = {
            distance,
            position: collision
          }
        }
      }
    }

    return closestWall && closestWall.position
  }
}
