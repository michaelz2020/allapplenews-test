<template>
  <div class="page-container py-4 pb-12">
    <section-heading-one
      headingTitle="Our Authors"
      class="text-center"
    ></section-heading-one>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <author-card-simple
        v-for="author in authors"
        :key="author.id"
        :authorName="author.name"
        :authorProfileURL="author.profilePicture.url"
        :authorSlug="author.slug"
        class="md:my-8"
      >
      </author-card-simple>
    </div>
    <div class="my-4 md:my-8 max-w-5xl mx-auto">
      <h2 class="font-headline ml-1 md:ml-4">Trending News</h2>
      <news-block-related></news-block-related>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title:
          'Amazing Writers at AllAppleNews - 2020 - Latest Apple News Releases Tutorials Wallpapers',
        description:
          'Learn more about our amazing writers who are passionate about the lastest technology. Join us if you are like one of them.',
        keywords:
          'apple, iphone, iphones 12, ipad pro, airpods, apple watch, apple music',
        pictureURL:
          'https://res.cloudinary.com/essentia-holdings/image/upload/v1601577401/all_apple_news/article_covers/all_apple_news/allapplenews-covers-all-apple-news-6_mg8ahx.jpg',
      },
    }
  },

  async asyncData({ $sanity, params }) {
    const query = `{"authors": *[_type == "author"]{
      _updatedAt,
      "id": _id,
      name,
     oneLiner,
     "slug":slug.current,
      profilePicture
    }}`
    let authors = await $sanity.fetch(query, params)
    return authors
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
          content: `https://www.allapplenews.com/authors/`,
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
        '@id': 'https://www.allapplenews.com/authors/',
      },
      headline: `${meta.title}`,
      datePublished: '2020-10-11T00:29:21Z',
      dateModified: `${this.authors[0]._updatedAt}`,
      publisher: {
        '@type': 'Organization',
        name: 'All Apple News',
        url: 'https://www.allapplenews.com/',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1602723841/all_apple_news/website/logos/aan_4_rsc_all-apple-news-logo-black_1_20201013_ey0syi.jpg',
          width: 500,
          height: 500,
        },
        brand: 'All Apple News',
        publishingPrinciples: 'https://www.allapplenews.com/about-us/',
        sameAs: ['https://www.instagram.com/all.applenews/'],
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
