<template>
  <header class="pt-4 md:pt-8 -mb-4">
    <nuxt-link
      class="text-sm uppercase tracking-wider hover:text-accent border border-black px-3 ml-2 md:ml-0"
      :to="{ path: `/${breadCrumb}/` }"
      >{{ breadCrumb }}</nuxt-link
    >
    <h1 class="font-article-title mt-2 mb-2 px-2 md:px-0">
      {{ title }}
    </h1>
    <div class="flex items-center justify-start px-2 space-x-4">
      <profile-intro
        :authorName="author.name"
        :authorSlug="author.slug.current"
        :profilePicture="author.profilePicture"
        :pageView="pageViewFirst"
      ></profile-intro>

      <!-- <p
          class="font-sans text-3xl md:text-4xl leading-4 text-black text-right mb-1"
        >
          {{ hours }}
        </p> -->
      <p>| {{ dateFromNow }}</p>
    </div>
  </header>
</template>

<script>
import { formatDistanceToNowStrict, getUnixTime, parseISO } from 'date-fns'
export default {
  data() {
    return {
      getUnixTime,
      formatDistanceToNowStrict,
      parseISO,
    }
  },
  props: {
    breadCrumb: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Apple releases Greatness Code Trailer for Apple TV+',
    },
    rawDate: {
      type: String,
      default: '2020-07-06T21:13:38Z',
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
}
</script>

<style></style>
