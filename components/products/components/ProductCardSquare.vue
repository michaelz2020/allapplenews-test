<template>
  <nuxt-link
    :to="{ path: `/products/${productSlug}/` }"
    class="flex flex-col itmes-center justify-start h-full pt-4 pb-2 space-y-8"
  >
    <image-lazy
      class="mb-4 h-24 md:h-40 mx-auto"
      :imageURL="productImageURL"
      :imageAlt="productImageAlt"
      imageTransformation="f_auto,w_800/"
    ></image-lazy>
    <div>
      <h3
        class="mx-auto mb-2 md:mb-4 px-4 py-1 md:px-12 md:py-2 text-sm text-center border border-black"
      >
        {{ productName }}
      </h3>
      <div class="text-xs text-left">
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
