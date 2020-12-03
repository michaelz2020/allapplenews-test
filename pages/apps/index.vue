<template>
  <div class="page-container md:py-4">
    <section-heading-one headingTitle="Apps" class="ml-4"></section-heading-one>
    <div class="flex flex-wrap justify-center items-center">
      <app-card-horizontal-simple
        v-for="app in apps"
        :key="app.id"
        :appName="app.name"
        :category="app.category"
        :appLogoURL="app.imageBaseURL"
        :appDescription="app.oneLiner"
        :appSlug="app.slug"
      />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "app"]{
      _updatedAt,
      "id": _id,
      name,
      oneLiner,
      description,
      "imageBaseURL": appLogo.url,
      category,
      "slug": slug.current
    }`

export default {
  data() {
    return {
      apps: [],
      meta: {
        title: 'Apple Apps - iOS/ iPadOS/ macOS/ watchOS - 2020 - AllAppleNews',
        description:
          'Get to know more Apple devices. Amzing tutorials and tips and tricks are waiting for you.',
        keywords: 'iphone, ipads, ipad pro, iphone 12, ios 14',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
      },
    }
  },
  // computed: {
  //   updatedAt() {
  //     let date = new Date().toISOString().slice(0, 19) + 'Z'
  //     return date
  //   },
  // },
  async fetch() {
    const result = await this.$sanity.fetch(query, this.$route.params)

    this.apps = result
  },

  head() {
    let meta = this.meta

    return {
      title: `${meta.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${meta.description}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${meta.keywords}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${meta.title}`,
        },
        {
          property: 'article:section',
          content: `Apple`,
        },

        //Facebook Open Graph Tags
        // {
        //   property: 'fb:app_id',
        //   content: `${articleType.name}`
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
          content: `https://allapplenews.com/apps/`,
        },
        {
          property: 'og:title',
          content: `${meta.title}`,
        },
        {
          property: 'og:description',
          content: `${meta.description}`.replace(/<\/?[^>]+(>|$)/g, ''),
        },
        {
          property: 'og:image',
          content: `${meta.pictureURL}`,
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
          property: 'article:meta',
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
          content: `${meta.title}`,
        },
        {
          name: 'twitter:description',
          content: `${meta.description}`,
        },
        {
          name: 'twitter:image',
          content: `${meta.pictureURL}`,
        },
      ],
    }
  },
  jsonld() {
    let meta = this.meta

    return {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      mainEntityOfPage: {
        '@type': 'Webpage',
        '@id': 'https://allapplenews.com/apps/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-11T00:29:21Z',
      dateModified: `${this.apps[0]._updatedAt}`,
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
        address: {
          '@type': 'PostalAddress',
          streetAddress: '450 SW Marine Dr.',
          addressLocality: 'Vancouver',
          addressRegion: 'BC',
          postalCode: 'V6J 2R3',
          addressCountry: 'Canada',
        },
      },
      description: `${meta.description}`,
    }
  },
}
</script>
