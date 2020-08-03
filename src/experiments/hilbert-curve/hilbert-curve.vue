<template>
  <div id="canvas"></div>
</template>

<script>
import HilbertCurve from './script/hilbert-curve'

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      containerElement: null
    }
  },
  mounted() {
    this.containerElement = document.querySelector('#canvas')

    this.initHibertCurve()
  },
  methods: {
    initHibertCurve() {
      this.containerElement.innerHTML = ''

      new HilbertCurve('#canvas', this.options)
    }
  },
  watch: {
    options: {
      handler() {
        this.initHibertCurve()
      },
      deep: true
    }
  }
}
</script>
