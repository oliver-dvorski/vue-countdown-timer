<template>
  <span class="od-timer">{{ displayValue }}</span>
</template>

<script>
import { isFirstRun } from '../utils/base'
import { addMinutes } from 'date-fns'
import { parseISO } from 'date-fns/fp'

export default {
  props: {
    target: {
      type: Date,
      default: () => addMinutes(Date.now(), 30)
    }
  },

  data () {
    return {
      displayValue: '',
      interval: null
    }
  },

  computed: {
    savedTimestamp () {
      return parseISO(window.localStorage.getItem('countdownTimerTarget'))
    }
  },

  methods: {
    twoDigits (n) {
      return n < 10 ? `0${n}` : n
    },

    refreshDisplay () {
      let targetTime = parseISO(window.localStorage.getItem('countdownTimerTarget'))
      const now = Date.now()

      const diff = targetTime - now

      if (diff < 0) {
        this.displayValue = '00:00:00'
        clearInterval(this.interval)
        return
      }

      const hours = this.twoDigits(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )

      const minutes = this.twoDigits(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      )

      const seconds = this.twoDigits(
        Math.floor((diff % (1000 * 60)) / 1000)
      )

      this.displayValue = `${hours}:${minutes}:${seconds}`
    }
  },

  mounted () {
    if (isFirstRun()) {
      window.localStorage.setItem('countdownTimerTarget', this.target.toISOString())
    }

    this.refreshDisplay()

    this.interval = setInterval(this.refreshDisplay, 1000)
  }
}
</script>
