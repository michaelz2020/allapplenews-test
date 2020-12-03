<template>
  <div class="md:py-4">
    <app-meta
      :appName="app.name"
      :appOneLiner="app.oneLiner"
      :appLogoURL="app.appLogo.url"
      :appLogoAlt="app.appLogo.alt"
      :appDescription="app.description"
    />
    <app-features
      :category="app.category"
      :developer="app.developer"
      :ageRating="app.ageRating"
      :inAppPurchase="app.inAppPurchase"
      :size="app.size"
      :compatibility="app.compatibility"
    />
    <app-screen-shots :appScreenShotURLs="appScreenShots"></app-screen-shots>
    <div
      class="flex flex-col items-center space-y-4 md:space-y-20 mx-auto py-4 md:py-8"
    >
      <template v-if="app.relatedArticles.length !== 0">
        <h2 class="font-headline ml-1 md:ml-4">Related Articles</h2>
        <article-card-horizontal
          v-for="(article, index) in app.relatedArticles"
          :key="article.id"
          :title="article.title"
          :rawDate="article.rawDate"
          :description="article.seoDescription"
          :imageURL="article.imgBaseURL"
          :imageAlt="article.imgAlt"
          :slug="article.slug"
          :author="{
            name: article.author.name,
            profilePicture: article.author.profilePicture,
            slug: article.author.slug.current,
          }"
          :index="index"
      /></template>
      <subscribe-full-width />
      <h2 class="font-headline ml-1 md:ml-4">Trending News</h2>
      <news-block-related class="max-w-5xl"></news-block-related>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "app" && slug.current == $slug][0]{
      ...,
      "relatedArticles": *[_type=='article' && references(^._id)]{
        "id":_id,
        title,
        seoDescription,
        "rawDate": _updatedAt,
        "imgBaseURL": coverPhoto.url,
        "imgAlt":coverPhoto.alt,
        author->{name,profilePicture,slug},
        "slug": slug.current
        }
      }`

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query, this.$route.params)

    this.app = result
  },
  data() {
    return {
      app: {},
    }
  },
  computed: {
    appScreenShots() {
      let appScreenShots = this.app.screenshots.map((screenShot) => {
        return screenShot.url
      })
      return appScreenShots
    },
    pageViewFirst() {
      let pageView1 = String(this.app._createdAt).charAt(17)
      let pageView2 = String(this.app._updatedAt).charAt(17)
      const pageView3 = String(this.app.name.length)
      let pageView = pageView1 + pageView2 + pageView3
      return pageView
    },
    pageViewLast() {
      let pageView2 = String(this.app._updatedAt).charAt(18)
      return pageView2
    },
  },
  head() {
    let app = this.app

    return {
      title: `${app.seoTitle} Tips and Tricks - 2020 - AllAppleNews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${app.name}(2020) - ${app.seoDescription}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${app.seoKeywords}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${app.seoTitle}`,
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
          content: `https://allapplenews.com/apps/${app.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${app.seoTitle}`,
        },
        {
          property: 'og:description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${app.seoTitle}(2020) - ${app.seoDescription}`.replace(
            /<\/?[^>]+(>|$)/g,
            ''
          ),
        },
        {
          property: 'og:image',
          content: `${app.appLogo.url}`,
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
          content: `${app.seoTitle}`,
        },
        {
          name: 'twitter:description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${app.name}(2020) - ${app.seoDescription}`,
        },
        {
          name: 'twitter:image',
          content: `${app.appLogo.url}`,
        },
      ],
    }
  },
  jsonld() {
    let app = this.app

    return {
      '@context': 'https://schema.org',
      '@type': 'Newsapp',
      headline: `${app.seoTitle}`,
      datePublished: `${app._createdAt}`,
      dateModified: `${app._updatedAt}`,
      description: `${app.seoDescription}`,
      image: {
        '@type': 'ImageObject',
        url: `${app.appLogo.url}`,
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
        '@id': `https://allapplenews.com/${app.slug.current}/`,
      },
    }
  },
}
</script>
