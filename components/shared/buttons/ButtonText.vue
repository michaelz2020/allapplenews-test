<template>
  <nuxt-link
    :to="{ path: `/${buttonLink}/` }"
    class="mr-4 p-4 text-black flex justify-end items-center hover:underline"
  >
    <span class="text-lg tracking-wider uppercase mr-2">{{ buttonText }}</span
    ><svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
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
