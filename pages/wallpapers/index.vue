<template>
  <div class="page-container py-4">
    <section-heading-one
      headingTitle="Wallpapers Collections"
    ></section-heading-one>
    <div
      class="flex items-center justify-start flex-no-wrap md:flex-wrap overflow-x-auto py-4"
    >
      <wallpaper-card-collection
        v-for="wallpapersCollection in wallpapersCollections"
        :key="wallpapersCollection.id"
        :collectionName="wallpapersCollection.name"
        :collectionCoverURL="wallpapersCollection.coverImageURL"
        :collectionRawDate="wallpapersCollection._updatedAt"
        :collectionSlug="wallpapersCollection.slug"
      >
      </wallpaper-card-collection>
    </div>
    <div class="px-4">
      <subscribe-horizontal-white
        class="my-4 md:my-8 mx-auto"
      ></subscribe-horizontal-white>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Apple Apps - iOS/ iPadOS/ macOS/ watchOS - 2020 - AllAppleNews',
        description:
          'Free iPhone HD wallpapers featuring aestechic, cute, Christmas collections waiting for you to download.',
        keywords:
          'iphone wallpaper, iphone wallpeprs, aethetic wallperps, HD wallpeprs, iPhone backgrounds',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
      },
    }
  },

  async asyncData({ $sanity, params }) {
    const query = `{"wallpapersCollections": *[_type == "wallpapersCollection"]{
      _updatedAt,
      "id": _id,
      name,
      description,
      "coverImageURL": coverImage.url,
      "coverImageAlt": coverImage.alt,
      wallpapersIncluded,
      "slug": slug.current
    }}`

    return $sanity.fetch(query, params)
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
          content: `https://allapplenews.com/wallpapers/`,
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
        '@id': 'https://allapplenews.com/wallpapers/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-11T00:29:21Z',
      dateModified: `${this.wallpapersCollections[0]._updatedAt}`,
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
