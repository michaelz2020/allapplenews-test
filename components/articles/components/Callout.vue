<template>
  <div
    class="max-w-lg md:mx-auto m-4 md:my-8 px-8 pt-4 pb-6 border-2 border-black"
  >
    <div class="mb-1 font-title">
      {{ name }}
    </div>
    <p class="">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Lorem ipsum dolor sit amet, consectetur adipi sicing elit',
    },

    name: {
      type: String,
      default: 'Name',
    },
  },
}
</script>
