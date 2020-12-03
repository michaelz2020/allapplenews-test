<template>
  <div class="space-y-8 md:pt-2 flex flex-col items-center">
    <news-block-home></news-block-home>

    <button-horizontal
      link="news/2020"
      buttonText="More News"
    ></button-horizontal>
    <subscribe-full-width></subscribe-full-width>

    <div class="max-w-6xl mx-auto md:px-4 w-full">
      <section-heading-two headingTitle="Products"></section-heading-two>
      <products-block-home></products-block-home>
      <button-text
        buttonLink="products"
        buttonText="More Products"
      ></button-text>
    </div>

    <div class="bg-bgLightGray w-full py-4">
      <div class="max-w-6xl mx-auto">
        <section-heading-two headingTitle="Wallpapers"></section-heading-two>
        <wallpapers-block-home></wallpapers-block-home>
        <button-text
          buttonLink="wallpapers "
          buttonText="More Wallpapers"
        ></button-text>
      </div>
    </div>
  </div>
</template>

<script>
import { fromUnixTime, formatISO } from 'date-fns'
export default {
  data() {
    return {
      fromUnixTime,
      formatISO,
      meta: {
        title:
          'AllAppleNews - iPhone iPad Mac Apple Watch AirPods News Rumors Tutorials - 2020',
        description:
          'All Apple News is where you find the latest Apple news, tutorials, product releases, wallpapers and more',
        keywords:
          'apple, iphone, iphone 12, ipad pro, airpods, apple watch, apple music',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
      },
    }
  },

  computed: {
    time() {
      return Date.now()
    },
    lastUpdated() {
      return this.formatISO(fromUnixTime(this.time))
    },
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
          content: `https://allapplenews.com/`,
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
        '@id': 'https://allapplenews.com/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-12T22:23:19Z',
      dateModified: `${this.lastUpdated}`,
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
