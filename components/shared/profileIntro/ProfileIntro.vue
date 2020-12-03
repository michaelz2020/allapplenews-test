<template>
  <div class="flex items-center">
    <nuxt-link class="flex-shrink-0" :to="{ path: `/authors/${authorSlug}/` }">
      <image-lazy
        class="mt-2 h-8 w-8 rounded-full"
        :imageURL="profilePicture.url"
        :imageAlt="profilePicture.alt"
        imageTransformation="w_500/"
      />
    </nuxt-link>
    <div class="ml-3">
      <nuxt-link
        :to="{ path: `/authors/${authorSlug}/` }"
        class="font-caption-bold mb-2 hover:underline"
      >
        {{ authorName }}
      </nuxt-link>

      <div class="font-caption">{{ pageView }}K Views</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      default: 'Author',
    },
    authorSlug: {
      type: String,
      default: '#',
    },
    profilePicture: {
      alt: 'allapplenews-phoebe-nario',
      url:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1594666556/all-apple-news/websites/authors/allapplenews-authorprofile-2_lio6iq.jpg',
    },
    pageView: {
      type: String,
      default: '5',
    },
    dateFromNow: {
      type: String,
      default: '5 days ago',
    },
  },
}
</script>

<style></style>
