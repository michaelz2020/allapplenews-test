<template>
  <div
    class="flex items-center justify-start md:justify-center flex-no-wrap md:flex-wrap overflow-x-auto py-4 max-w-6xl"
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
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq` *[_type == "wallpapersCollection"][0...4]{
      _updatedAt,
      "id": _id,
      name,
      description,
      "coverImageURL": coverImage.url,
      "coverImageAlt": coverImage.alt,
      wallpapersIncluded,
      "slug": slug.current
    }`

export default {
  data() {
    return {
      wallpapersCollections: [],
    }
  },

  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.wallpapersCollections = result
    console.log('Wallpaper Home Fetch Performed')
    // this.articlesDisplayed = result.slice(this.startSlice, this.endSlice)
  },
}
</script>
