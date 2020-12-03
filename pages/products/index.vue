<template>
  <div class="page-container md:py-4 space-y-4">
    <section-heading-one headingTitle="Apple Products"></section-heading-one>
    <products-index-block
      :productFeatured="productFeatured"
      :productVertical="productVertical"
      :productsHorizontal="productsHorizontal"
      :productsSquare="productsSquare"
    ></products-index-block>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "product"] | order(productOrder asc) {
      _updatedAt,
      "id": _id,
      name,
      oneLiner,
      seoDescription,
      "imageBaseURL": mainProductImage.url,
      releaseDate,
      "slug": slug.current
    }`

export default {
  data: () => ({
    products: [],
    meta: {
      title:
        'iPhone, iPad, Apple Watch, AirPods, MacBook Pro - 2020 - Latest Apple Device Reviews & Tutorials',
      description:
        'Want to shop the latest Apple devices? Before you make the purchase, you want to do your due dilligence. Here you will find the ultimate collection of iPhone, iPad and Apple Watch reviews and tutorials',
      keywords:
        'iphones, iphone, iphones 12, apple watch, airpods, airpods pro, ipad pro, ipads',
      pictureURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
    },
  }),

  async fetch() {
    const result = await this.$sanity.fetch(query)
    // result.shift()
    this.products = result
  },
  computed: {
    productFeatured() {
      return this.products[0]
    },
    productVertical() {
      return this.products[1]
    },
    productsHorizontal() {
      const productsHorizontal = [...this.products]
      return productsHorizontal.slice(2, 4)
    },
    productsSquare() {
      const productsSquare = [...this.products]
      productsSquare.shift()
      productsSquare.shift()
      productsSquare.shift()
      productsSquare.shift()
      return productsSquare
    },
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
          content: `https://allapplenews.com/products/`,
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
        '@id': 'https://allapplenews.com/products/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-12T22:23:19Z',
      dateModified: `${this.products[0]._updatedAt}`,
      publisher: {
        '@type': 'Organization',
        name: 'All Apple News',
        url: 'https://allapplenews.com',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1602723841/all_apple_news/website/logos/aan_4_rsc_all-apple-news-logo-black_1_20201013_ey0syi.jpg',
          width: 500,
          height: 500,
        },
        brand: 'All Apple News',
        publishingPrinciples: 'https://allapplenews.com/about-us',
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
