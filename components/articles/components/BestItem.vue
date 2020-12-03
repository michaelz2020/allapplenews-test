<template>
  <div class="max-w-xl w-full mx-auto">
    <image-lazy :imageURL="picture.url" :imageAlt="picture.alt"></image-lazy>
    <div
      class="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0"
    >
      <h3 class="text-xl leading-4">{{ title }}</h3>
      <star-rating :rating="rating"></star-rating>
      <a :href="buttonLink" class="button button-black">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Best Overall: Dell XPS 13 (9370)',
    },
    producName: {
      type: String,
      default: 'Dell XPS 13',
    },
    rating: {
      type: Number,
      default: 2.5,
    },
    buttonText: {
      type: String,
      default: 'Buy Now',
    },
    buttonLink: {
      type: String,
      default: '#',
    },
    picture: {
      type: Object,
      default() {
        return {
          alt:
            'best-ipad-pro-deals-on-amazon-you-don-t-want-to-miss-today-20200929-2',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1600968971/all_apple_news/article_covers/ipados/allapplenews-covers-ipados-15_iifpg0.jpg',
        }
      },
    },
  },
}
</script>
