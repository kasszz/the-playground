export default class Hilbert {
  static points = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 0 },
  ]

  constructor(order) {
    this.order = order
    this.pointsOnAxis = Math.pow(2, this.order)
    this.totalPoints = this.pointsOnAxis * this.pointsOnAxis

    this.path = this.generatePath()
  }

  static getFirstOrderPoint(index) {
    const binary = Hilbert.numberToBinary(index)
    const pointIndex = Hilbert.getLastTwoBits(binary)

    return Object.assign({}, Hilbert.points[ pointIndex ])
  }

  // toString takes a 'radix' as an argument.
  // By using the radix you can convert the base of the number.
  // The base is how we count, base 10 is 'normal'. example: 1, 2, 3, 4, 5, 6...
  // Base 2 is binary. example: (14).toString(2) = "1110"
  static numberToBinary(number) {
    return (number).toString(2)
  }

  // >>> is the operator to shift the bits to the right.
  // example: "0111" => "0001", "1011" => "0010"
  static getQuadrantBinary(index) {
    return index >>> 2
  }

  // Returns only the sum of the bits that are useful for the given number (3).
  // example: "1010" = 2, "1110" = 2, "0010" = 2, "0001" = 1, "1011" = 3
  static getLastTwoBits(bin) {
    return bin & 3
  }

  generatePath() {
    const path = []

    for (let index = 0; index < this.totalPoints; index++) {
      const point = this.calculatePoint(index)
      path.push( point )
    }

    return path
  }

  calculatePoint(index) {
    let point = Hilbert.getFirstOrderPoint(index)

    for (let orderCount = 1; orderCount < this.order; orderCount++) {
      index = Hilbert.getQuadrantBinary(index)
      const quadrantIndex = Hilbert.getLastTwoBits(index)
      const offset = Math.pow(2, orderCount)

      switch(quadrantIndex) {
        case 0: // Top Left
          var temp = point.x
          point.x = point.y
          point.y = temp

          break
        case 1: // Bottom Left
          point.y += offset

          break
        case 2: // Bottom Right
          point.x += offset
          point.y += offset

          break
        case 3: // Top Right
          var temp2 = offset - 1 - point.x
          point.x = offset - 1 - point.y
          point.y = temp2
          point.x += offset

          break
      }
    }

    return point
  }
}
