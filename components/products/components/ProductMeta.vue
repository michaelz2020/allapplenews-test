<template>
  <div
    class="flex flex-col items-center md:flex-row border border-black m-4 max-w-5xl md:mx-auto"
  >
    <div class="items-center w-full md:w-1/2 p-12 md:p-16">
      <image-static
        :imageURL="productImageURL"
        :imageAlt="productImageALT"
        imageTransformation="f_auto,w_1000/"
        class="md:max-w-xs mx-auto"
      ></image-static>
    </div>
    <div
      class="w-full md:w-1/2 grid grid-cols-12 gap-0 border-t md:border-t-0 md:border-l border-black"
    >
      <div class="p-2 md:pl-4 col-span-4 border-r border-b border-black">
        Model
      </div>

      <div class="p-2 md:pl-4 col-span-8 font-bold border-b border-black">
        {{ productName }}
      </div>
      <div class="p-2 md:pl-4 col-span-4 border-r border-b border-black">
        Release Date
      </div>

      <div class="p-2 md:pl-4 col-span-8 font-bold border-b border-black">
        {{ releaseDate }}
      </div>
      <div class="p-3 md:p-4 md:pb-6 col-span-12 border-b border-black">
        <h2 class="font-bold mb-1">Features</h2>
        <div
          v-for="(feature, index) in productFeatures"
          :key="index"
          class="text-textDark ml-3"
        >
          • {{ feature }}
        </div>
      </div>
      <div class="p-3 md:p-4 md:pb-6 col-span-12 border-black">
        <h2 class="font-bold mb-1 md:mb-2">Description</h2>
        <p class="text-textDark">{{ productDescription }}</p>
      </div>
    </div>
  </div>
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
    productDescription: {
      type: String,
      default:
        'All Apple News offers the best apple related news and product reviews',
    },
    productFeatures: {
      type: Array,
    },
  },
  computed: {
    productImageALT() {
      return `allapplenews-product-${this.productName}`
    },
  },
}
</script>
