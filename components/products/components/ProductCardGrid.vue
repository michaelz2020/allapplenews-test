<template>
  <nuxt-link
    :to="{ path: `/products/${slug}/` }"
    class="grid grid-cols-12 gap-0 border text-sm border-black min-w-md lg:w-64 h-88 shadow-stackedHovered hover:shadow-stacked transition-shadow duration-150 ease-in-out"
  >
    <div class="p-2 col-span-5 border-r border-b border-black">Model</div>

    <div class="p-2 col-span-7 font-bold border-b border-black truncate">
      {{ productName }}
    </div>
    <div class="p-2 col-span-5 border-r border-b border-black">
      Release Date
    </div>

    <div class="p-2 col-span-7 font-bold border-b border-black">
      {{ releaseDate }}
    </div>
    <div class="p-4 md:p-8 col-span-12 h-70 flex justify-center items-center">
      <image-lazy
        :imageURL="productImageURL"
        :imageAlt="productImageALT"
        imageTransformation="f_auto,w_1000/"
      ></image-lazy>
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
    releaseDate: {
      type: String,
      default: '2020.12.12',
    },
    productImageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604963849/all_apple_news/products/iphone_12/allapplenews-product-iphone-12-1_ucb529.png',
    },
    slug: {
      type: String,
      default: '',
    },
  },
  computed: {
    productImageALT() {
      return `allapplenews-product_${this.productName}`
    },
  },
}
</script>
