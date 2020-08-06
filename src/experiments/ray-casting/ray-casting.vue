<template>
  <div id="canvas"></div>
</template>

<script>
import Game from './script/game'

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

    this.initRayCasting()
  },
  methods: {
    initRayCasting() {
      this.containerElement.innerHTML = ''

      new Game('#canvas', this.options)
    }
  },
  watch: {
    options: {
      handler() {
        this.initRayCasting()
      },
      deep: true
    }
  }
}
</script>
