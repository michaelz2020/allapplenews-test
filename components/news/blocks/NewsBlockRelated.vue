<template>
  <div class="flex items-center justify-between flex-wrap">
    <news-card-simple
      v-for="article in relatedNewsArticles"
      :key="article.key"
      :title="article.title"
      :rawDate="article.rawDate"
      :imgBaseURL="article.imgBaseURL"
      :description="article.seoDescription"
      :slug="article.slug"
      :author="article.author"
      class="my-4 md:mx-2"
    >
    </news-card-simple>
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
  data() {
    return {
      articles: [],
    }
  },
  props: {
    newsArticleID: {
      type: String,
      default: 'article',
    },
  },
  computed: {
    relatedNewsArticles() {
      return this.articles
        .filter((article) => article.id !== this.newsArticleID)
        .slice(0, 6)
    },
  },
  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.articles = result
    console.log('News Related Before Mount Fetch Performed')
    // this.articlesDisplayed = result.slice(this.startSlice, this.endSlice)
  },
  async beforeMount() {
    await this.$fetch()
  },
  activated() {
    // Call fetch again if last fetch more than a minute ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
    console.log('News Related Activated')
  },
}
</script>
