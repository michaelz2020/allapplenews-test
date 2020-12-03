<template>
  <img
    class="lozad object-cover"
    :src="imageLazyURL"
    :data-src="imageURL"
    :alt="imageAlt"
  />
</template>

<script>
export default {
  data() {
    return {
      imageLazyURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1606159641/all_apple_news/website/logos/allapplenews-website-logos-logobanners-vertical-5_bro2um.jpg',
    }
  },
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
  },
  //   computed: {
  //     imagePublicID() {
  //       const matches = this.imageURL.match(/upload\/(?:v\d+\/)?([^]+)/)
  //       //upload\/(?:v\d+\/)?([^\.]+)
  //       return matches[1]
  //     },
  //     imageLazyURL() {
  //       return `https://res.cloudinary.com/essentia-holdings/e_blur:1000,f_auto,q_1,/${this.imagePublicID}`
  //     },
  //     imageFinalURL() {
  //       // return `https://res.cloudinary.com/essentia-holdings/f_auto,q_auto/${this.imagePublicID}`
  //       return `https://res.cloudinary.com/essentia-holdings/${this.imagePublicID}`
  //     },
  //   },
  mounted() {
    this.$lozad.observe()
  },
}
</script>
