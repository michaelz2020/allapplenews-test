<template>
  <div class="flex flex-col items-center space-y-4 py-4 md:py-8 lg:py-16 px-2">
    <img
      :src="authorProfileURL"
      :alt="authorProfileAlt"
      class="h-40 w-40 rounded-full object-cover"
    />

    <h1 class="font-title">{{ authorName }}</h1>

    <p class="max-w-xl mx-auto text-sm md:text-base px-2">
      {{ authorDescription }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    authorProfileURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1603269318/all_apple_news/apps/instagram/allapplenews-apps-instagram-logo_nv086l.jpg',
    },
    authorProfileAlt: {
      type: String,
      default: 'allapplenews',
    },
    authorName: {
      type: String,
      default: 'Instagram',
    },
    authorOneLiner: {
      type: String,
      default: 'Instagram',
    },
    authorDescription: {
      type: String,
      default: 'Instagram',
    },
  },
}
</script>

<style></style>
