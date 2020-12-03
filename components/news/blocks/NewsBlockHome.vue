<template>
  <div class="md:p-4 max-w-6xl">
    <div
      class="flex flex-col md:flex-row justify-start md:py-6 md:border-b border-textDark md:mx-6"
    >
      <section-heading-news-home class="transform md:translate-x-10 p-2" />
      <news-card-featured
        :title="articleFeatured.title"
        :rawDate="articleFeatured.rawDate"
        :imgBaseURL="articleFeatured.imgBaseURL"
        :slug="articleFeatured.slug"
        :author="articleFeatured.author"
        :description="articleFeatured.seoDescription"
      />
    </div>
    <div
      class="flex flex-wrap items-center justify-center py-6 mb-6 md:mx-6 space-y-8 md:space-y-0 scrolling-touch md:scrolling-auto md:border-b border-textDark md:divide-x divide-textDark"
    >
      <news-card-vertical
        v-for="article in articlesFirstRow"
        :key="article.id"
        :title="article.title"
        :rawDate="article.rawDate"
        :imgBaseURL="article.imgBaseURL"
        :slug="article.slug"
        :author="article.author"
        :description="article.seoDescription"
        class="md:px-4"
      >
      </news-card-vertical>
    </div>
    <div
      class="flex flex-wrap items-center justify-center pb-6 mb-6 md:mx-6 space-y-8 md:space-y-0 scrolling-touch md:scrolling-auto md:divide-x divide-textDark"
    >
      <news-card-vertical
        v-for="article in articlesSecondRow"
        :key="article.id"
        :title="article.title"
        :rawDate="article.rawDate"
        :imgBaseURL="article.imgBaseURL"
        :slug="article.slug"
        :author="article.author"
        :description="article.seoDescription"
        class="md:px-4"
      >
      </news-card-vertical>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "articleNews"]| order(_createdAt desc)[0...7]{
      "id": _id,
      title,
       seoDescription,
      "rawDate": _createdAt,
      "imgBaseURL": coverImage.url,
      "slug": slug.current,
      author->{name, profilePicture, slug}
    }`

export default {
  data: () => ({
    articles: [],
  }),

  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.articles = result
  },
  computed: {
    articleFeatured() {
      return this.articles[0]
    },
    articlesFirstRow() {
      const articlesFirstRow = [...this.articles]
      return articlesFirstRow.slice(1, 4)
    },
    articlesSecondRow() {
      const articlesSecondRow = [...this.articles]
      return articlesSecondRow.slice(4, 7)
    },
  },
}
</script>
