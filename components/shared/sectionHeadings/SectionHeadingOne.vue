<template>
  <h1 class="leading-tight text-left p-3 md:p-4">
    {{ headingTitle }}
  </h1>
</template>

<script>
export default {
  props: {
    headingTitle: {
      type: String,
      default: 'All Apple News',
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.75rem;
  line-height: 1.15;
  letter-spacing: 0.15rem;

  font-weight: 700;
  text-shadow: 2px 2px 0px #000;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  transition: all 0.15s linear 0s;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    -webkit-text-stroke-width: 2px;
    text-shadow: 4px 4px 0px #000;
  }
}
</style>
