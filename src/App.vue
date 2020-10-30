<template>
  <div id="app">
    <Banner text="CTA Text >" href="special-link"/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'app',
  components: {
    Banner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
