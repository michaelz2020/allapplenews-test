<template>
  <article
    class="page-container flex flex-col items-center space-y-4 md:space-y-20 mx-auto py-4 md:py-8"
  >
    <section-heading-one
      :headingTitle="system.name"
      class="md:text-center"
    ></section-heading-one>
    <system-meta
      :systemName="system.name"
      :releaseDate="system.releaseDate"
      :systemImageURL="system.mainSystemImage.url"
      :systemDescription="system.description"
      :systemFeatures="system.features"
    ></system-meta>

    <section class="mx-auto prose prose-sm sm:prose md:text-textDark">
      <BlockContent
        :blocks="system.body"
        :v-if="system.body"
        :serializers="serializers"
      />
    </section>
    <subscribe-full-width />

    <div class="my-4 md:my-8 max-w-5xl mx-auto">
      <h2 class="font-headline ml-1 md:ml-4">Related News</h2>
      <news-block-related></news-block-related>
    </div>
  </article>
</template>

<script>
import { formatDistanceToNowStrict, getUnixTime, parseISO } from 'date-fns'

import BlockContent from 'sanity-blocks-vue-component'

import ArticleImageBody from '@/components/articles/components/ArticleImageBody.vue'
import BestItem from '@/components/articles/components/BestItem.vue'
import Callout from '@/components/articles/components/Callout.vue'
import ComparisonTable from '@/components/articles/components/ComparisonTable.vue'
import DataTable from '@/components/articles/components/DataTable.vue'

import Heading2 from '@/components/articles/components/Heading2.vue'
import Heading3 from '@/components/articles/components/Heading3.vue'
import Instagram from '@/components/articles/components/Instagram.vue'
import Quote from '@/components/articles/components/Quote.vue'
import ScreenShot from '@/components/articles/components/ScreenShot.vue'

import Twitter from '@/components/articles/components/Twitter.vue'
import YoutubeMedia from '@/components/articles/components/YoutubeMedia.vue'

export default {
  components: {
    BlockContent,
  },

  async asyncData({ $sanity, params }) {
    const querySystem = `{ "system": *[_type == "system" && slug.current == "${params.slug}"][0]{
      ...,
      systemType->,
    }}`
    let system = await $sanity.fetch(querySystem, params)
    return system
  },

  data() {
    return {
      getUnixTime,
      formatDistanceToNowStrict,
      parseISO,
      serializers: {
        types: {
          picture: ArticleImageBody,
          bestItem: BestItem,
          callout: Callout,
          comparisonTable: ComparisonTable,
          table: DataTable,
          heading2: Heading2,
          heading3: Heading3,
          instagram: Instagram,
          quote: Quote,
          screenShot: ScreenShot,
          twitter: Twitter,
          youtube: YoutubeMedia,
        },
        marks: {
          product: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/products/${slug.current}`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
          app: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/apps/${slug.current}`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
          article: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/articles/${slug.current}`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
        },
      },
    }
  },
  head() {
    let system = this.system

    return {
      title: `${system.seoTitle} - 2020 - AllAppleNews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${system.seoDescription}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${system.seoKeywords}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${system.name}`,
        },
        {
          property: 'article:section',
          content: `${system.systemType.name}`,
        },

        //Facebook Open Graph Tags
        // {
        //   property: 'fb:app_id',
        //   content: `${productType.name}`
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
          content: `https://allapplenews.com/systems/${system.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${system.name}`,
        },
        {
          property: 'og:description',
          content: `${system.description}`.replace(/<\/?[^>]+(>|$)/g, ''),
        },
        // {
        //   property: 'og:image',
        //   content: `${system.mainSystemImage.url}`
        // },
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
          content: `${system.seoTitle}`,
        },
        {
          name: 'twitter:description',
          content: `${system.seoDescription}`,
        },
        {
          name: 'twitter:image',
          content: `${system.mainSystemImage.url}`,
        },
      ],
    }
  },
  jsonld() {
    let system = this.system

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${system.seoTitle}`,
      datePublished: `${system._createdAt}`,
      dateModified: `${system._updatedAt}`,
      description: `${system.seoDescription}`,
      image: {
        '@type': 'ImageObject',
        url: `${system.mainSystemImage.url}`,
        height: 3000,
        width: 2000,
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
        '@id': `https://allapplenews.com/systems/${system.slug.current}/`,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
p,
ol,
ul {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  @media (min-width: 768px) {
    padding-right: 0rem;
    padding-left: 0rem;
  }
}
</style>
