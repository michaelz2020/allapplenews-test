<template>
  <div class="space-y-4 py-4 px-2">
    <div
      class="p-4 flex justify-center items-center space-x-4 max-w-lg mx-auto"
    >
      <img
        :src="appLogoURL"
        :alt="appLogoAlt"
        class="h-12 w-12 md:h-20 md:w-20 rounded-full"
      />
      <div>
        <h1 class="font-title">{{ appName }}</h1>
        <p class="text-xs md:text-sm text-textDark">{{ appOneLiner }}</p>
      </div>
    </div>
    <p class="max-w-2xl mx-auto text-sm px-2">
      {{ appDescription }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    appLogoURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1603269318/all_apple_news/apps/instagram/allapplenews-apps-instagram-logo_nv086l.jpg',
    },
    appLogoAlt: {
      type: String,
      default: 'allapplenews',
    },
    appName: {
      type: String,
      default: 'Instagram',
    },
    appOneLiner: {
      type: String,
      default: 'Instagram',
    },
    appDescription: {
      type: String,
      default: 'Instagram',
    },
  },
}
</script>

<style></style>
