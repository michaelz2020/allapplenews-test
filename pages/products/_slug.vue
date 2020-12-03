<template>
  <article class="page-container">
    <section-heading-one
      :headingTitle="product.name"
      class="md:text-center"
    ></section-heading-one>
    <product-meta
      :productName="product.name"
      :releaseDate="product.releaseDate"
      :productImageURL="product.mainProductImage.url"
      :productDescription="product.description"
      :productFeatures="product.features"
    ></product-meta>

    <section class="mx-auto prose prose-sm sm:prose md:text-textDark">
      <BlockContent
        :blocks="product.body"
        :v-if="product.body"
        :serializers="serializers"
      />
    </section>
    <subscribe-horizontal class="mt-8"></subscribe-horizontal>
    <div class="my-4 md:my-8 max-w-5xl mx-auto">
      <h2 class="font-headline ml-1 md:ml-4">Trending Stories</h2>
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

  computed: {
    pageViewFirst() {
      let numberOne = this.product.name.length * 35
      let numberTwo = Number(String(this.datetime).charAt(5))
      let pageView = String(Math.floor((numberOne + numberTwo) / 2))
      return pageView
    },
    pageViewLast() {
      let pageView = String(this.datetime).charAt(6)
      return pageView
    },
    datetime() {
      if (typeof this.product._createdAt != 'undefined') {
        let datetime = this.getUnixTime(parseISO(this.product._createdAt))
        return datetime
      }
    },
  },
  async asyncData({ $sanity, params }) {
    const queryProduct = `{ "product": *[_type == "product" && slug.current == "${params.slug}"][0]{
      ...,
      productType->,
     }}`
    let product = await $sanity.fetch(queryProduct, params)
    return product
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
    let product = this.product

    return {
      title: `${product.seoTitle} - 2020 - AllAppleNews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageViewFirst}.${this.pageViewLast}K Views - ${product.seoDescription}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${product.seoKeywords}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${product.name}`,
        },
        {
          property: 'article:section',
          content: `${product.productType.name}`,
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
          content: `https://www.allapplenews.com/products/${product.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${product.name}`,
        },
        {
          property: 'og:description',
          content: `${product.seoDescription}`.replace(/<\/?[^>]+(>|$)/g, ''),
        },
        {
          property: 'og:image',
          content: `${product.mainProductImage.url}`,
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
          content: `${product.name}`,
        },
        {
          name: 'twitter:description',
          content: `${product.description}`,
        },
        {
          name: 'twitter:image',
          content: `${product.mainProductImage.url}`,
        },
      ],
    }
  },
  jsonld() {
    let product = this.product

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${product.seoTitle}`,
      datePublished: `${product._createdAt}`,
      dateModified: `${product._updatedAt}`,
      description: `${product.seoDescription}`,
      image: {
        '@type': 'ImageObject',
        url: `${product.mainProductImage.url}`,
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
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1602723841/all_apple_news/website/logos/aan_4_rsc_all-apple-news-logo-black_1_20201013_ey0syi.jpg',
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
        '@id': `https://allapplenews.com/products/${product.slug.current}/`,
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
