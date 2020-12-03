<template>
  <instagram-embed :url="instagramURL" :max-width="250" :hide-caption="true" />
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed'
export default {
  components: {
    InstagramEmbed,
  },
  props: {
    instagramURL: {
      type: String,
      default: 'https://www.instagram.com/p/Bs_yHwHBjKo/',
    },
  },
}
</script>

<style></style>
