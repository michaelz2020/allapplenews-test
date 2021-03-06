<template>
  <div class="page-container max-w-6xl md:py-4">
    <section-heading-one
      headingTitle="Latest Articles "
      class="text-center"
    ></section-heading-one>
    <div
      class="flex flex-col items-center space-y-4 md:space-y-12 mx-auto mb-4 md:mb-8"
    >
      <article-card-horizontal
        v-for="(article, index) in articles"
        :key="article.key"
        :title="article.title"
        :rawDate="article.rawDate"
        :imageURL="article.imgBaseURL"
        :slug="article.slug"
        :author="article.author"
        :description="article.description"
        :index="index"
        class="py-2 md:py-4"
      >
      </article-card-horizontal>

      <button-horizontal
        link="articles/archives"
        buttonText="More Articles"
        class="my-6"
      ></button-horizontal>
    </div>
    <subscribe-horizontal class="my-4"></subscribe-horizontal>
    <h2 class="font-title pl-3 mb-2">Latest Products</h2>
    <products-block-home class="mb-4"></products-block-home>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "article"]| order(_createdAt desc)[0...6]{
      "id": _id,
      title,
      "rawDate": _updatedAt,
      "imgBaseURL": coverPhoto.url,
      "slug": slug.current,
      author->,
      "description":seoDescription
    }`

export default {
  data() {
    return {
      articles: [],
      resultsPerPage: 6,
      meta: {
        title: 'Latest Articles About Apple - 2020 - AllAppleNews',
        description:
          'Here you will find the latest articles on Apple devices including the iPhone 12, iPad Pro, AirPods, Homepod Mini and More.',
        keywords:
          'apple, iphone, iphones 12, ipad pro, airpods, apple watch, apple music',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
      },
    }
  },

  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.articles = result
    console.log('Articles Fetch Performed')
    // this.articlesDisplayed = result.slice(this.startSlice, this.endSlice)
  },
  head() {
    let meta = this.meta

    return {
      title: `${meta.title} `,
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
          content: `https://allapplenews.com/articles/`,
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
        '@id': 'https://allapplenews.com/articles/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-11T00:29:21Z',
      dateModified: `${this.articles[0].rawDate}`,
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
