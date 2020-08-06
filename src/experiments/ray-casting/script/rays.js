import Ray from './ray.js'

export default class Rays {
  constructor(gameObjects, numberOfRays) {
    this.gameObjects = gameObjects
    this.rays = []

    for (let i = 0; i < numberOfRays; i++) {
      const degrees = 360 / numberOfRays * i

      this.rays.push(
        new Ray(this.gameObjects, degrees)
      )
    }
  }

  update() {
    for(const ray of this.rays) {
      ray.update()
    }
  }

  draw() {
    for(const ray of this.rays) {
      ray.draw()
    }
  }
}
