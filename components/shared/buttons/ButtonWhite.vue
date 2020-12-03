<template>
  <nuxt-link
    :to="{ path: `/${buttonLink}/` }"
    class="mr-2 px-4 py-2 bg-white text-black font-button border border-black hover-stacked"
  >
    {{ buttonText }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: 'Click Here',
    },
  },
}
</script>

<style></style>
