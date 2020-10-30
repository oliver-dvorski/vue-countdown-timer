<template>
  <div class="od-timer-banner">
    <Timer />

    <a :href="href">{{ text }}</a>
  </div>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  props: {
    text: {
      type: String
    },
    href: {
      type: String
    }
  },

  components: {
    Timer
  }
}
</script>

<style lang="scss">
  .od-timer-banner {
    display: flex;
    flex-direction: column;
    align-items: center;

    .od-timer {
      margin-bottom: 1rem;
      overflow-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      font-family: calluna serif;
      font-weight: 400;
      font-style: normal;
      letter-spacing: .02em;
      text-transform: none;
      line-height: 1.4em;
      font-size: calc(2.16vh +  1rem);
      margin: 2rem 0;
      color: #212322;
      margin-top: 0;
      text-align: center;
      white-space: pre-wrap;
    }
  }

  a {
    overflow-wrap: break-word;
    text-align: center;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    font-family: sofia-pro sans-serif;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: .04em;
    font-size: calc(.12vh +  1rem);
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    line-height: normal;
    padding: 1.2em 2.004em;
    color: #fff;
    background-color: #a4541c;
    border-color: #a4541c;
    transition: .1s opacity linear;
  }
</style>
