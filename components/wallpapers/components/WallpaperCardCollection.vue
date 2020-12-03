<template>
  <nuxt-link
    :to="{ path: `/wallpapers/${collectionSlug}/` }"
    class="grid grid-cols-12 gap-0 border border-black min-w-md max-w-xxs m-2 shadow-stackedHovered hover:shadow-stacked transition-shadow duration-150 ease-in-out bg-white"
  >
    <div class="p-2 col-span-12 border-b border-black">
      <image-lazy
        :imageURL="collectionCoverURL"
        :imageAlt="collectionCoverALT"
      ></image-lazy>
    </div>
    <div class="p-2 col-span-4 border-r border-b border-black">Collection</div>

    <div class="p-2 col-span-8 font-bold border-b border-black">
      {{ collectionName }}
    </div>
    <div class="p-2 col-span-4 border-r border-black">Date</div>

    <div class="p-2 col-span-8 font-bold">{{ collectionDate }}</div>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      collectionCoverLazyURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1606159641/all_apple_news/website/logos/allapplenews-website-logos-logobanners-vertical-5_bro2um.jpg',
    }
  },
  props: {
    collectionName: {
      type: String,
      default: 'Collection',
    },
    collectionRawDate: {
      type: String,
      default: '2020-11-22T20:49:17Z',
    },
    collectionCoverURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604098132/all_apple_news/wallpapers/sky/sunset-pink-clouds-08-02-PK-030_ckyo10.jpg',
    },
    collectionSlug: {
      type: String,
      default: '',
    },
  },
  computed: {
    collectionDate() {
      return this.collectionRawDate.slice(0, 10)
    },
    collectionCoverALT() {
      return `allapplenews-wallpaper-${this.collectionName}`
    },
  },
}
</script>
