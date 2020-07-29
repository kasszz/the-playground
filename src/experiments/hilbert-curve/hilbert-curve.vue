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
    }
  },
  mounted() {
    new HilbertCurve('#canvas', this.options)
  }
}
</script>
