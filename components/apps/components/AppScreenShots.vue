<template>
  <div class="flex items-center justify-start md:justify-center py-4 px-2 space-x-6 overflow-x-auto">
    <img
      v-for="screenshot in appScreenShotURLs"
      :key="screenshot"
      :src="screenshot"
      alt="allapplenews-app-screenshots"
      class=" w-56 "
    >
    </img>

  </div>
</template>

<script>
export default {
  props: {
    appScreenShotURLs: {
      type: Array,
      default: ['', '', ''],
    },
  },

}
</script>

<style></style>
