<template>
  <div>{{ time }}</div>
</template>

<script>
import { isFirstRun } from '../utils/base'

export default {
  data () {
    return {
      time: ''
    }
  },

  mounted () {
    const currentTime = new Date().toLocaleTimeString().toString()

    if (isFirstRun()) {
      window.localStorage.setItem('countdownTimerTime', currentTime)
      this.time = currentTime

      return
    }

    this.time = window.localStorage.getItem('countdownTimerTime')
  }
}
</script>
