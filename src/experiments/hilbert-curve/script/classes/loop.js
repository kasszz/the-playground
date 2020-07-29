export default class Loop {
  constructor(callback, cycleIntervalInMs) {
    this.callback = callback
    this.cycleIntervalInMs = cycleIntervalInMs

    this.lastCycleInMs = 0
    this.stopLoop = false
  }

  play() {
    this.cycle()
  }

  stop() {
    this.stopLoop = true
    this.lastCycleInMs = 0
  }

  cycle(nowInMs) {
    if (nowInMs - this.lastCycleInMs >= this.cycleIntervalInMs) {
      this.lastCycleInMs = nowInMs

      this.callback()
    }

    if (!this.stopLoop) {
      window.requestAnimationFrame(timestamp => this.cycle(timestamp))
    }
  }
}
