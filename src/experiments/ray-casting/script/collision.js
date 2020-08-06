import Utils from './utils.js'

export default class Collision {
  static line(firstElement, secondElement) {
    const x1 = firstElement.startPosition.x
    const y1 = firstElement.startPosition.y
    const x2 = firstElement.endPosition.x
    const y2 = firstElement.endPosition.y

    const x3 = secondElement.startPosition.x
    const y3 = secondElement.startPosition.y
    const x4 = secondElement.endPosition.x
    const y4 = secondElement.endPosition.y

    const uA = ((x4-x3) * (y1-y3) - (y4-y3) * (x1-x3)) / ((y4-y3) * (x2-x1) - (x4-x3) * (y2-y1))
    const uB = ((x2-x1) * (y1-y3) - (y2-y1) * (x1-x3)) / ((y4-y3) * (x2-x1) - (x4-x3) * (y2-y1))

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      const intersectionX = x1 + (uA * (x2-x1))
      const intersectionY = y1 + (uA * (y2-y1))

      return Utils.vector2(intersectionX, intersectionY)
    }
  }
}
