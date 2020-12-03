<template>
  <client-only>
    <youtube
      :video-id="youtubeID"
      player-width="100%"
      player-height="100%"
      class="max-w-2xl w-full mx-auto h-56 md:h-88 my-4 md:my-8"
    ></youtube>
  </client-only>
</template>

<script>
export default {
  props: {
    youtubeID: {
      type: String,
      default: 'zliKoTotc1c',
    },
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
