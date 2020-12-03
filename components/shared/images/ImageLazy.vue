<template>
  <img
    class="lozad object-contain"
    :src="imageLazyURL"
    :data-src="imageFinalURL"
    :alt="imageAlt"
  />
</template>

<script>
export default {
  props: {
    imageLazyURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
    },
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
    //   // return `https://res.cloudinary.com/essentia-holdings/f_auto,q_auto/${this.imagePublicID}`
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
