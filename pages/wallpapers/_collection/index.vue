<template>
  <div class="page-container">
    <section-heading-one :headingTitle="collection.name" class="text-center" />
    <p class="max-w-xl mx-auto px-4 text-xs md:text-sm text-textDark">
      {{ collection.description }}
    </p>
    <div
      class="flex justify-start md:justify-center flex-no-wrap md:flex-wrap overflow-x-auto py-2 md:py-4 mx-auto space-x-6 md:space-x-0"
    >
      <template v-for="wallpaper in collection.wallpapersIncluded">
        <nuxt-link
          :to="{ path: `/wallpapers/collections/${wallpaper.slug.current}/` }"
          :key="wallpaper._key"
        >
          <image-wallpaper
            :imageURL="wallpaper.cloudinaryDownloadURL"
            :imageAlt="wallpaper.name"
            class="min-w-md md:w-56 m-2 shadow-stackedHovered hover:shadow-stacked transition-shadow duration-150 ease-in-out"
          >
          </image-wallpaper
        ></nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import { getUnixTime, parseISO } from 'date-fns'

export default {
  async asyncData({ $sanity, params }) {
    const queryCollection = `{ "collection": *[_type == "wallpapersCollection" && slug.current == "${params.collection}"][0]{
      ...,
      wallpapersIncluded[]->
      }
    }`

    let collection = await $sanity.fetch(queryCollection, params)
    return collection
  },
  data() {
    return {
      getUnixTime,
      parseISO,
    }
  },
  computed: {
    datetime() {
      let datetime = this.getUnixTime(parseISO(this.collection._createdAt))
      return datetime
    },
    pageViewFirst() {
      let pageView1 = String(this.datetime).charAt(4)
      let pageView2 = String(this.datetime).charAt(5)
      let pageView = pageView1 + pageView2
      return pageView
    },
    pageViewLast() {
      let pageView = String(this.datetime).charAt(6)
      return pageView
    },
  },
  head() {
    let collection = this.collection

    return {
      title: `${collection.seoTitle} | Free HD iPhone Wallpapers - 2020 - AllAppleNews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${collection.name}(2020) - ${collection.seoDescription}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${collection.seoKeywords}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${collection.seoTitle}`,
        },
        {
          property: 'article:section',
          content: `AllAppleNews`,
        },

        //Facebook Open Graph Tags
        // {
        //   property: 'article:section',
        //   content: `${appType.name}`
        // },
        {
          property: 'og:type',
          content: `article`,
        },
        {
          property: 'og:site_name',
          content: `All Apple News`,
        },
        {
          property: 'og:url',
          content: `https://allapplenews.com/wallpapers/${collection.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${collection.seoTitle}`,
        },
        {
          property: 'og:description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${collection.seoTitle}(2020) - ${collection.seoDescription}`.replace(
            /<\/?[^>]+(>|$)/g,
            ''
          ),
        },
        {
          property: 'og:image',
          content: `${collection.coverImage.url}`,
        },
        {
          property: 'og:image:width',
          content: `1200`,
        },
        {
          property: 'og:image:height',
          content: `960`,
        },
        {
          property: 'article:author',
          content: `https://allapplenews.com/`,
        },

        //Twitter Cards
        {
          name: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          name: 'twitter:site',
          content: `@allapplenews`,
        },
        {
          name: 'twitter:title',
          content: `${collection.seoTitle}`,
        },
        {
          name: 'twitter:description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${collection.name}(2020) - ${collection.seoDescription}`,
        },
        {
          name: 'twitter:image',
          content: `${collection.coverImage.url}`,
        },
      ],
    }
  },
  jsonld() {
    let collection = this.collection

    return {
      '@context': 'https://schema.org',
      '@type': 'Newsapp',
      headline: `${collection.seoTitle}`,
      datePublished: `${collection._createdAt}`,
      dateModified: `${collection._updatedAt}`,
      description: `${collection.seoDescription}`,
      image: {
        '@type': 'ImageObject',
        url: `${collection.coverImage.url}`,
        height: 500,
        width: 500,
      },
      publisher: {
        '@type': 'Organization',
        name: 'All Apple News',
        url: 'https://allapplenews.com/',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1606171493/all_apple_news/website/logos/allapplenews-website-logos-black-logo_vjwwdj.png',
          width: 500,
          height: 500,
        },
        brand: 'All Apple News',
        publishingPrinciples: 'https://allapplenews.com/about-us/',
        sameAs: [
          'https://www.instagram.com/all.applenews/',
          'https://www.facebook.com/allapplenews/',
          'https://www.tiktok.com/@all.applenews',
          'https://twitter.com/AllAppleNews2',
          'https://www.pinterest.ca/allapplenews1/',
        ],
      },
      mainEntityOfPage: {
        '@type': ['WebPage'],
        '@id': `https://allapplenews.com/${collection.slug.current}/`,
      },
    }
  },
}
</script>
