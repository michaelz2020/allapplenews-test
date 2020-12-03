<template>
  <nuxt-link
    :to="{ path: `/systems/${systemSlug}/` }"
    class="flex flex-col md:flex-row p-3 max-w-2xl md:mx-auto bg-bgLightGreyDark hover:bg-gray-300 rounded-md"
  >
    <div class="w-full md:w-1/3 p-2 md:p-6 md:order-last">
      <image-static
        :imageURL="systemImageURL"
        :imageAlt="systemImageALT"
        imageTransformation="w_1000/"
        class="w-16 h-16 md:w-auto md:h-auto"
      ></image-static>
    </div>

    <div class="w-full md:w-2/3">
      <div class="p-1">
        <h2 class="font-bold">System Covered</h2>
      </div>
      <div class="flex p-1">
        <div class="font-bold pr-2">Model:</div>

        <div class="">
          {{ systemName }}
        </div>
      </div>

      <div class="flex p-1">
        <div class="font-bold pr-2">Release Date:</div>

        <div class="">
          {{ releaseDate }}
        </div>
      </div>
      <div class="p-1">
        <h2 class="font-bold mb-1">Description</h2>
        <p class="text-textDark text-xs">{{ systemDescription }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    systemName: {
      type: String,
      default: 'iPhone 12',
    },
    releaseDate: {
      type: String,
      default: '2020.12.12',
    },
    systemImageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604963849/all_apple_news/products/iphone_12/allapplenews-product-iphone-12-1_ucb529.png',
    },
    systemDescription: {
      type: String,
      default: '',
    },
    systemSlug: {
      type: String,
      default: '',
    },
  },
  computed: {
    systemImageALT() {
      return `allapplenews-product-${this.systemName}`
    },
  },
}
</script>
