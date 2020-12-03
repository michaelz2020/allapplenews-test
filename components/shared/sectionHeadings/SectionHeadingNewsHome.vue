<template>
  <nuxt-link to="/news/">
    <h2
      class="md:w-48 leading-tight text-left transition duration-100 ease-in-out py-2"
    >
      LATEST NEWS
    </h2>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h2 {
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
    font-size: 4.5rem;
    -webkit-text-stroke-width: 2px;
    text-shadow: 5px 5px 0px #000;
  }
}
h2:hover {
  text-shadow: 0px 0px 0px #000;
}
</style>
