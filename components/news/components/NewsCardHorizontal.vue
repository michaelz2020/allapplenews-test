<template>
  <nuxt-link :to="{ path: `/news/${slug}/` }">
    <div
      class="group flex flex-col md:flex-row max-w-5xl justify-between cursor-pointer md:space-x-4"
      :class="{ 'md:space-x-reverse': isSwapped }"
    >
      <image-lazy
        class="md:w-1/2 md:px-2"
        :class="{ 'md:order-last': isSwapped }"
        :imageURL="imageURL"
        :alt="imageAlt"
        imageTransformation="w_1500/"
      ></image-lazy>

      <div class="md:w-1/2 p-3 md:p-8 flex flex-col justify-between">
        <div class="pb-8 md:pb-0">
          <h2 class="font-headline group-hover:text-accent mb-2 md:mb-4">
            {{ title }}
          </h2>
          <p class="font-subheadline">
            {{ description }}
          </p>
        </div>

        <div class="flex items-center justify-between">
          <profile-intro
            :authorName="author.name"
            :authorSlug="author.slug.current"
            :profilePicture="author.profilePicture"
            :pageView="pageViewFirst"
          ></profile-intro>

          <p class="font-sans text-base leading-4 text-black text-right">
            {{ dateFromNow }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { getUnixTime, formatDistanceToNowStrict, parseISO } from 'date-fns'

export default {
  data() {
    return {
      getUnixTime,
      formatDistanceToNowStrict,
      parseISO,
    }
  },
  props: {
    title: {
      type: String,
      default: 'Apple releases Greatness Code Trailer for Apple TV+',
    },
    rawDate: {
      type: String,
      default: '2020-07-06T21:13:38Z',
    },
    description: {
      type: String,
      default:
        'Subscribe to our newsletter to receive the latest Apple related news stories. Also check out our articles for great tutorials.',
    },
    imageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605054381/all_apple_news/news/202011/20201110/allapplenews-news-202011-20201110-18_jgtgfe.jpg',
    },
    imageAlt: {
      type: String,
      default: 'allapplenews',
    },
    slug: {
      type: String,
      default: '',
    },
    author: {
      type: Object,
      default() {
        return {
          name: 'Phoebe Nario',
          profilePicture: {
            alt: 'allapplenews-phoebe-nario',
            url:
              'https://res.cloudinary.com/essentia-holdings/image/upload/v1594666556/all-apple-news/websites/authors/allapplenews-authorprofile-2_lio6iq.jpg',
          },
          slug: {
            current: 'phoebe-nario',
          },
        }
      },
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    isSwapped() {
      return this.index % 2 == 0
    },
    pageViewFirst() {
      let numberOne = this.title.length
      let numberTwo = Number(String(this.datetime).charAt(5))
      let pageView = String(Math.floor((numberOne + numberTwo) / 2))
      return pageView
    },
    // pageViewLast() {
    //   let numberOne = this.title.length
    //   let numberTwo = Number(String(this.datetime).charAt(6))
    //   let pageView = Math.floor(numberOne + numberTwo)
    //   return pageView
    // },
    dateFromNow() {
      var result = formatDistanceToNowStrict(parseISO(this.rawDate), {
        addSuffix: true,
      })
      return result
    },
    datetime() {
      let datetime = this.getUnixTime(parseISO(this.rawDate))
      return datetime
    },
    hours() {
      let hours = this.rawDate.slice(11, 16)
      return hours
    },
  },
}
</script>
