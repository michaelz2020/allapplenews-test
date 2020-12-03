<template>
  <nuxt-link
    :to="{ path: `/apps/${appSlug}/` }"
    class="bg-bgGrayDark flex items-center justify-around m-2 p-3 w-64 md:w-70 mx-auto bg-bgLightGreyDark hover:bg-gray-300 rounded-md"
  >
    <div class="p-3 text-center w-1/4">
      <img
        :src="appLogoURL"
        alt=""
        class="h-12 w-12 md:h-16 md:w-16 rounded-full"
      />
    </div>
    <div class="w-3/4">
      <h2 class="font-title mb-1">{{ appName }}</h2>
      <div class="whitespace-no-wrap font-caption mb-3">{{ category }}</div>
      <p class="text-xs text-black">{{ appDescription }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: 'iPhone 12',
    },
    category: {
      type: String,
      default: '2020.12.12',
    },
    appLogoURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1603269318/all_apple_news/apps/instagram/allapplenews-apps-instagram-logo_nv086l.jpg',
    },
    appDescription: {
      type: String,
      default: '',
    },
    appSlug: {
      type: String,
      default: '',
    },
  },
}
</script>
