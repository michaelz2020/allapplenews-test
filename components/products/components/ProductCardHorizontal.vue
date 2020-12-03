<template>
  <nuxt-link
    :to="{ path: `/products/${productSlug}/` }"
    class="flex flex-col md:flex-row justify-center items-center my-auto"
  >
    <div class="md:w-1/2 col-span-6">
      <image-lazy
        class="p-4"
        :imageURL="productImageURL"
        :imageAlt="productImageAlt"
        imageTransformation="f_auto,w_1000/"
      ></image-lazy>
    </div>
    <div class="md:w-1/2 col-span-6 p-4 md:p-8 text-center">
      <div
        class="inline-block mx-auto mb-4 px-6 py-2 text-center border border-black"
      >
        {{ productName }}
      </div>
      <div class="text-sm text-left">
        {{ productOneLiner }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    productName: {
      type: String,
      default: 'iPhone 12',
    },
    productImageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604963849/all_apple_news/products/iphone_12/allapplenews-product-iphone-12-1_ucb529.png',
    },
    productOneLiner: {
      type: String,
      default:
        ' The iPhone 12 is reported to have four different models: the iPhone 12, 12 Max, 12 Pro and 12 Pro Max. ',
    },
    productSlug: {
      type: String,
      default: '',
    },
  },
  computed: {
    productImageAlt() {
      return `allapplenews_${this.productName}`
    },
  },
}
</script>
