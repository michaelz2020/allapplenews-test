<template>
  <article>
    <article-headline
      :title="article.title"
      :rawDate="article.rawDate"
      :author="article.author"
      breadCrumb="news"
      class="article-container-title"
    >
    </article-headline>
    <div
      class="flex flex-col md:flex-row justify-center items-start md:space-x-6"
    >
      <aside class="hidden md:inline-flex sticky top-1 pt-3">
        <social-sharing-vertical class="mt-8"></social-sharing-vertical>
      </aside>
      <section class="prose prose-sm sm:prose text-textDark md:text-black">
        <BlockContent
          :blocks="article.body"
          :v-if="article.body"
          :serializers="serializers"
        />
      </section>
      <sidebar-wallpaper-news></sidebar-wallpaper-news>
    </div>
    <product-card-article
      v-if="article.productsCovered && article.productsCovered.length != 0"
      :productName="article.productsCovered.name"
      :productFeatures="article.productsCovered.features"
      :releaseDate="article.productsCovered.releaseDate"
      :productSlug="article.productsCovered.slug.current"
      :productImageURL="article.productsCovered.mainProductImage.url"
      :productDescription="article.productsCovered.description"
      class="mb-12"
    ></product-card-article>

    <system-card-article
      v-if="article.systemsCovered && article.systemsCovered.length != 0"
      :systemName="article.systemsCovered.name"
      :releaseDate="article.systemsCovered.releaseDate"
      :systemSlug="article.systemsCovered.slug.current"
      :systemImageURL="article.systemsCovered.mainSystemImage.url"
      :systemDescription="article.systemsCovered.description"
    ></system-card-article>

    <app-card-horizontal-simple
      v-if="article.appsCovered && article.appsCovered.length != 0"
      :appName="article.appsCovered.name"
      :category="article.appsCovered.category"
      :appDescription="article.appsCovered.oneLiner"
      :appSlug="article.appsCovered.slug.current"
      :appLogoURL="article.appsCovered.appLogo.url"
    ></app-card-horizontal-simple>

    <subscribe-full-width class="mt-4"></subscribe-full-width>
    <div class="my-4 md:my-8 max-w-5xl mx-auto">
      <h2 class="font-headline ml-1 md:ml-4">Related News</h2>
      <news-block-related :newsArticleID="article._id"></news-block-related>
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
import Heading from '@/components/articles/components/Heading.vue'
import Instagram from '@/components/articles/components/Instagram.vue'
import Quote from '@/components/articles/components/Quote.vue'
import ScreenShot from '@/components/articles/components/ScreenShot.vue'
import Twitter from '@/components/articles/components/Twitter.vue'
import YoutubeMedia from '@/components/articles/components/YoutubeMedia.vue'

import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "articleNews" && slug.current == $slug][0]{
        ...,
        "rawDate":_updatedAt,
        author->,
        productsCovered[0]->{name,oneLiner,description, releaseDate, slug,appLogo, mainProductImage, features},
        appsCovered[0]->{name,oneLiner,category, description, slug, appLogo},
        systemsCovered[0]->{name,oneLiner,releaseDate, slug, description, mainSystemImage},
        body[]{
          ...,
          markDefs[]{
            ...,
            _type in ["product", "app", "article"] => {
            "slug": @.reference-> slug
            }
          }
        }
      }`

export default {
  components: {
    BlockContent,
  },
  data() {
    return {
      article: {},
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
          heading: Heading,
          instagram: Instagram,
          quote: Quote,
          screenShot: ScreenShot,
          twitter: Twitter,
          youtube: YoutubeMedia,
        },
        marks: {
          product: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/products/${slug.current}/`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
          app: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/apps/${slug.current}/`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
          article: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/articles/${slug.current}/`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
          news: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/news/${slug.current}/`
            return <nuxt-link to={href}>{children}</nuxt-link>
          },
        },
      },
    }
  },

  computed: {
    pageViewFirst() {
      let numberOne = this.article.title.length
      let numberTwo = Number(String(this.datetime).charAt(5))
      let pageView = String(Math.floor((numberOne + numberTwo) / 2))
      return pageView
    },
    pageViewLast() {
      let pageView = String(this.datetime).charAt(6)
      return pageView
    },
    datetime() {
      if (typeof this.article.rawDate != 'undefined') {
        let datetime = this.getUnixTime(parseISO(this.article.rawDate))
        return datetime
      }
    },
    dateFromNow() {
      if (typeof this.article.rawDate != 'undefined') {
        var result = formatDistanceToNowStrict(parseISO(this.article.rawDate), {
          addSuffix: true,
        })
        return result
      }
    },
  },
  async fetch() {
    const result = await this.$sanity.fetch(query, this.$route.params)

    this.article = result
  },

  head() {
    let article = this.article

    return {
      title: `${article.title} - 2020 - Latest Apple News `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageViewFirst}.${this.pageViewFirst}K Views | Updated ${this.dateFromNow} | ${article.title}`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'iPhone 12, Airpods, Airpods Pro, iPad Air, Apple Watch',
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${article.title}`,
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
          content: `https://allapplenews.com/articles/${article.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${article.title}`,
        },
        {
          property: 'og:description',
          content: `${article.title}`.replace(/<\/?[^>]+(>|$)/g, ''),
        },
        {
          property: 'og:image',
          content: `${article.coverImage.url}`,
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
          content: `${article.title}`,
        },
        {
          name: 'twitter:description',
          content: `${article.title}`,
        },
        {
          name: 'twitter:image',
          content: `${article.coverImage.url}`,
        },
      ],
    }
  },
  jsonld() {
    let article = this.article

    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: `${article.title}`,
      datePublished: `${article._createdAt}`,
      dateModified: `${article._updatedAt}`,
      author: {
        '@type': 'Person',
        name: `${article.author.name}`,
        description: `${article.author.description}`,
        jobTitle: 'Writer',
      },
      description: `${article.title}`,
      image: {
        '@type': 'ImageObject',
        url:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1606171493/all_apple_news/website/logos/allapplenews-website-logos-black-logo_vjwwdj.png',
        width: 500,
        height: 500,
      },
      publisher: {
        '@type': 'Organization',
        name: 'All Apple News',
        url: 'https://allapplenews.com/',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
          width: 3000,
          height: 2000,
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
        '@id': `https://allapplenews.com/news/${article.slug.current}/`,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2,
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
