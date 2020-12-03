<template>
  <figure class="w-full md:w-screenShot md:-ml-48 mt-2 mb-4">
    <image-lazy
      :imageURL="url"
      :imageAlt="alt"
      :imageLazyURL="imageLazyURL"
    ></image-lazy>
    <figcaption v-if="caption" class="text-center italic text-gray-700">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  data() {
    return {
      imageLazyURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1606159640/all_apple_news/website/logos/allapplenews-website-logos-logobanners-horizontal-1_hzq9jv.jpg',
    }
  },
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
  },
}
</script>
