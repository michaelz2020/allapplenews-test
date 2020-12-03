<template>
  <div class="page-container py-2 space-y-2">
    <section-heading-one headingTitle="Apple Systems"></section-heading-one>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <system-card-article
        v-for="system in systems"
        :key="system.id"
        :systemName="system.name"
        :releaseDate="system.releaseDate"
        :systemImageURL="system.imageBaseURL"
        :systemDescription="system.description"
        :systemSlug="system.slug"
      >
      </system-card-article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title:
          'Apple Systems - iOS/ iPadOS/ macOS/ watchOS - 2020 - AllAppleNews',
        description:
          'Get to know more Apple systems. Amzing tutorials and tips and tricks are waiting for you.',
        keywords: 'iphone, ipads, ipad pro, iphone 12, ios 14',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1605310851/all_apple_news/website/logos/allapplenews-website-logos-logobanner-6_uujdfp.jpg',
      },
    }
  },

  async asyncData({ $sanity, params }) {
    const query = `{"systems": *[_type == "system"] | order(systemOrder asc){
      _updatedAt,
       "id": _id,
      name,
      oneLiner,
      description,
      "imageBaseURL": mainSystemImage.url,
      releaseDate,
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
          content: `https://www.allapplenews.com/systems/`,
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
          content: `https://www.allapplenews.com/`,
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
      dateModified: `${this.systems[0]._updatedAt}`,
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
