export default class Utils {
  static degreesToRadians(degrees) {
    return degrees * Math.PI / 180
  }

  static vector2(x, y) {
    return { x, y }
  }
}
