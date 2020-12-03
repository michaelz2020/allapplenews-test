<template>
  <h3 class="text-wrap mt-3 mb-2 block text-left pl-3 md:pl-0">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit',
    },
  },
}
</script>
