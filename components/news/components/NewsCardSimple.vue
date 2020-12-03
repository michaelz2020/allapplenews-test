<template>
  <div
    class="group flex flex-col justify-start min-w-md sm:max-w-xs md:h-84 cursor-pointer"
    @click="cardClicked"
  >
    <nuxt-link :to="{ path: `/news/${slug}/` }">
      <image-lazy
        :imageURL="imgBaseURL"
        alt="allapplenews"
        class="max-h-96"
      ></image-lazy>

      <h3 class="text-lg font-bold group-hover:text-accent p-2">
        {{ title }}
      </h3>
    </nuxt-link>
    <div class="flex items-end justify-start px-2 space-x-4">
      <span class="text-textDark text-xs border-r border-textDark pr-4">
        {{ dateFromNow }}</span
      >
      <span class="text-textDark text-xs">{{ pageViewFirst }}K Views</span>
    </div>
  </div>
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
    imgBaseURL: {
      type: String,
      default:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605054381/all_apple_news/news/202011/20201110/allapplenews-news-202011-20201110-18_jgtgfe.jpg',
    },
    slug: {
      type: String,
      default: 'slug',
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
  },
  computed: {
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
  methods: {
    cardClicked() {
      this.$router.push(`/news/${this.slug}/`)
    },
  },
}
</script>
