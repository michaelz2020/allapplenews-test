<template>
  <img class="object-cover" :src="imageFinalURL" :alt="imageAlt" />
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604963849/all_apple_news/products/iphone_12/allapplenews-product-iphone-12-1_ucb529.png',
    },
    imageAlt: {
      type: String,
      default: 'allapplenews',
    },
    imageTransformation: {
      type: String,
      default: '',
    },
  },
  computed: {
    // imagePublicID() {
    //   const matches = this.imageURL.match(/upload\/(?:v\d+\/)?([^]+)/)
    //   //upload\/(?:v\d+\/)?([^\.]+)
    //   return matches[1]
    // },
    // imageLazyURL() {
    //   return `https://res.cloudinary.com/essentia-holdings/e_blur:1000,f_auto,q_1,/${this.imagePublicID}`
    // },
    // imageFinalURL() {
    //   //   return `https://res.cloudinary.com/essentia-holdings/f_auto,q_auto/${this.imagePublicID}`
    //   return `https://res.cloudinary.com/essentia-holdings/${this.imagePublicID}`
    // },
    imageFinalURL() {
      let index = this.imageURL.indexOf('upload') + 7
      // let transformation = 'f_auto,q_auto/'
      let result =
        this.imageURL.slice(0, index) +
        this.imageTransformation +
        this.imageURL.slice(index, this.imageURL.length)

      return result
    },
  },
  mounted() {
    this.$lozad.observe()
  },
}
</script>
