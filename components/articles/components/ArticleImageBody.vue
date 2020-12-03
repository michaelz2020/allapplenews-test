<template>
  <figure class="max-w-2xl w-full mx-auto mt-2 mb-4">
    <image-lazy :imageURL="url" :imageAlt="alt"></image-lazy>
    <figcaption v-if="caption" class="text-center italic text-gray-700">
      {{ caption }}
    </figcaption>
    <figcaption v-if="source" class="text-center italic text-gray-700">
      {{ source }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605039995/all_apple_news/news/202011/20201110/allapplenews-news-202011-20201110-11_fdmexu.jpg',
    },
    alt: {
      type: String,
      default: 'allapplenews_picture',
    },
    caption: {
      type: String,
    },
    source: {
      type: String,
    },
  },
}
</script>
