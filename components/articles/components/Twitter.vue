<template>
  <div class="p-4">
    <Tweet
      :id="twitterID"
      error-message="This tweet could not be loaded"
    ></Tweet>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: {
    Tweet,
  },
  props: {
    twitterID: {
      type: String,
      default: '783943172057694208',
    },
  },
}
</script>
