<template>
  <div>
    <Timer />

    <a :href="href" class="sqs-block-button-element--large sqs-block-button-element">{{ text }}</a>
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
