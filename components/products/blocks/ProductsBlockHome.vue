<template>
  <div
    class="p-2 md:px-8 flex flex-no-wrap items-center justify-start md:justify-center space-x-8 overflow-x-auto"
  >
    <product-card-grid
      v-for="product in products"
      :key="product.id"
      :productName="product.name"
      :releaseDate="product.releaseDate"
      :productImageURL="product.imageBaseURL"
      :slug="product.slug"
    >
    </product-card-grid>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "product"] | order(productOrder asc)[1...5] {
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
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.products = result
    console.log('Products Home Fetch Performed')
    // this.articlesDisplayed = result.slice(this.startSlice, this.endSlice)
  },
}
</script>
