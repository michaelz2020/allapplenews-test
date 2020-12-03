<template>
  <div class="page-container md:py-4">
    <h1 class="font-title pl-3 mb-2 md:pl-5 md:mt-4">
      Apple News 2020 Page {{ pageID }}
    </h1>
    <div class="flex items-center justify-center flex-wrap md:space-x-4">
      <news-card-vertical
        v-for="article in articlesDisplayed"
        :key="article.key"
        :title="article.title"
        :rawDate="article.rawDate"
        :imgBaseURL="article.imgBaseURL"
        :description="article.seoDescription"
        :slug="article.slug"
        :author="article.author"
        class="py-2 md:py-4"
      >
      </news-card-vertical>
      <pagination
        :maxVisibleButtons="5"
        folderName="news/2020"
        :currentPage="pageID"
        :resultsPerPage="resultsPerPage"
        :total="this.totalArticles"
      ></pagination>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "articleNews"]| order(_createdAt desc){
    "id": _id,
      title,
      seoDescription,
      "rawDate": _createdAt,
      "imgBaseURL": coverImage.url,
      "slug": slug.current,
      author->{name, profilePicture, slug}
    }`

export default {
  data() {
    return {
      articles: [],
      resultsPerPage: 6,
      meta: {
        title: 'Latest Apple News | 2020 | ',
        description:
          'Discover the latest Apple related news including product leaks, software updates, deals, and more',
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
    console.log('News Fetch Performed')
  },
  computed: {
    pageID() {
      if (this.$route.params.id > 0) {
        return Number(this.$route.params.id)
      } else {
        return 1
      }
    },
    articlesDisplayed() {
      return this.articles.slice(this.startSlice, this.endSlice)
    },
    totalArticles() {
      return this.articles.length
    },
    startSlice() {
      return this.resultsPerPage + (this.pageID - 1) * this.resultsPerPage
    },
    endSlice() {
      return (
        this.resultsPerPage +
        this.resultsPerPage +
        (this.pageID - 1) * this.resultsPerPage
      )
    },
  },
  head() {
    let meta = this.meta

    return {
      title: `${meta.title} ${this.pageID}`,
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
          content: `https://allapplenews.com/news/${this.pageID}`,
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
        '@id': 'https://allapplenews.com/news/',
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
