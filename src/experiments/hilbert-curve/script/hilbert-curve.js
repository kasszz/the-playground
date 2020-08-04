import Stage from './classes/stage'
import Hilbert from './classes/hilbert'
import Loop from './classes/loop'

export default class HilbertCurve {
  constructor(selector, options) {
    this.options = options
    this.stage = new Stage(selector, this.options.stageSize)
    this.loop = new Loop(this.cycle.bind(this), this.options.cycleInterval)
    this.hilbert = new Hilbert(this.options.order)

    this.cycleCount = 0
    this.segmentLength = this.stage.width / this.hilbert.pointsOnAxis
    this.segmentOffset = this.segmentLength / 2

    this.prepareStage()
    this.loop.play()
  }

  cycle() {
    this.drawSegment()
    this.cycleCount ++

    if (this.cycleCount > this.hilbert.path.length - 1) {
      this.loop.stop()
    }
  }

  drawSegment() {
    const { context } = this.stage
    const currentPoint = this.hilbert.path[ this.cycleCount ]
    const previousPoint = this.hilbert.path[ this.cycleCount - 1 ]

    if (previousPoint) {
      context.beginPath()
      context.moveTo(previousPoint.x * this.segmentLength + this.segmentOffset, previousPoint.y * this.segmentLength + this.segmentOffset)
      context.lineTo(currentPoint.x * this.segmentLength + this.segmentOffset, currentPoint.y * this.segmentLength + this.segmentOffset)
      context.strokeStyle = '#FFF'

      context.stroke()
    }

    if (this.options.drawPoints) {
      context.beginPath()

      context.arc(currentPoint.x * this.segmentLength + this.segmentOffset, currentPoint.y * this.segmentLength + this.segmentOffset, 2, 0, Math.PI * 2)
      context.fillStyle = '#FFF'

      context.fillText(this.cycleCount + 1, currentPoint.x * this.segmentLength + this.segmentOffset + 5, currentPoint.y * this.segmentLength + this.segmentOffset + 5)

      context.fill()
    }

  }

  prepareStage() {
    this.stage.context.rect(0, 0, this.stage.width, this.stage.height)
    this.stage.context.fill()
  }
}
