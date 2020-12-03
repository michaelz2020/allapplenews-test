<template>
  <nuxt-link
    :to="{ path: `/authors/${authorSlug}/` }"
    class="group text-center space-y-4 p-4 md:w-56 mx-auto"
  >
    <image-lazy
      :imageURL="authorProfileURL"
      :imageAlt="authorName"
      imageTransformation="w_1000/"
      class="w-20 h-20 md:w-40 md:h-40 rounded-full object-cover mx-auto"
    ></image-lazy>
    <h2 class="font-title group-hover:text-accent">{{ authorName }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      default: 'Author X',
    },
    authorProfileURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
    },
    authorSlug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
