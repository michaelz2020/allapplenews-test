<template>
  <div
    class="flex flex-col md:flex-row border border-black m-4 max-w-5xl md:mx-auto"
  >
    <div
      class="w-full md:w-1/2 p-12 md:p-20 border-b md:border-b-0 md:border-r border-black"
    >
      <image-static
        :imageURL="systemImageURL"
        :imageAlt="systemImageALT"
        imageTransformation="w_1000/"
      ></image-static>
    </div>
    <div class="w-full md:w-1/2 grid grid-cols-12 gap-0">
      <div class="p-2 md:pl-4 col-span-4 border-r border-b border-black">
        Name
      </div>

      <div class="p-2 md:pl-4 col-span-8 font-bold border-b border-black">
        {{ systemName }}
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
          v-for="(feature, index) in systemFeatures"
          :key="index"
          class="text-textDark text-sm ml-3"
        >
          • {{ feature }}
        </div>
        <!-- <div
          v-for="(feature, index) in systemFeatures"
          :key="index"
          class="text-textDark ml-3"
        >
          • {{ feature }}
        </div> -->
      </div>
      <div class="p-3 md:p-4 md:pb-6 col-span-12 border-black">
        <h2 class="font-bold mb-1 md:mb-2">Description</h2>
        <p class="text-textDark text-sm">{{ systemDescription }}</p>
      </div>
    </div>
  </div>
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
      default:
        'All Apple News offers the best apple related news and product reviews',
    },
    systemFeatures: {
      type: Array,
    },
  },
  computed: {
    systemImageALT() {
      return `allapplenews-product-${this.systemName}`
    },
  },
}
</script>
