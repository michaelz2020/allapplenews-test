<template>
  <nuxt-link
    :to="{ path: `/${link}/` }"
    class="w-64 py-2 mx-auto bg-black text-white text-center font-button border border-black hover-stacked"
  >
    {{ buttonText }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
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
