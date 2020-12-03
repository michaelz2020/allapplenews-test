<template>
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
      :maxVisibleButtons="3"
      folderName="news/2020"
      :currentPage="currentPage"
      :resultsPerPage="resultsPerPage"
      :total="this.totalArticles"
    ></pagination>
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
      //   articlesDisplayed: [],
      resultsPerPage: 6,
    }
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.articles = result
    console.log('News Fetch Performed')
    // this.articlesDisplayed = result.slice(this.startSlice, this.endSlice)
  },
  computed: {
    articlesDisplayed() {
      return this.articles.slice(this.startSlice, this.endSlice)
    },
    totalArticles() {
      return this.articles.length
    },
    startSlice() {
      return this.resultsPerPage + (this.currentPage - 1) * this.resultsPerPage
    },
    endSlice() {
      return (
        this.resultsPerPage +
        this.resultsPerPage +
        (this.currentPage - 1) * this.resultsPerPage
      )
    },
  },
}
</script>
