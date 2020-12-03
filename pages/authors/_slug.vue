<template>
  <div class="page-container">
    <author-meta
      :authorName="author.name"
      :authorSlug="author.slug"
      :authorProfileURL="author.profilePicture.url"
      :authorProfileAlt="author.profilePicture.alt"
      :authorDescription="author.description"
    />
    <div
      class="flex flex-col items-center space-y-4 md:space-y-20 mx-auto py-4 md:py-8"
    >
      <article-card-horizontal
        v-for="(article, index) in articleArticles"
        :key="article.id"
        :title="article.title"
        :rawDate="article.rawDate"
        :description="article.description"
        :imageURL="article.imgBaseURL"
        :imageAlt="article.imgAlt"
        :slug="article.slug"
        :author="{
          name: author.name,
          profilePicture: author.profilePicture,
          slug: author.slug,
        }"
        :index="index"
      />
      <news-card-horizontal
        v-for="(article, index) in newsArticles"
        :key="article.id"
        :title="article.title"
        :rawDate="article.rawDate"
        :description="article.description"
        :imageURL="article.coverImageURL"
        :imageAlt="article.coverImageAlt"
        :slug="article.slug"
        :author="{
          name: author.name,
          profilePicture: author.profilePicture,
          slug: author.slug,
        }"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $sanity, params }) {
    const queryAuthor = `{
        "author": *[_type == "author" && slug.current == "${params.slug}"][0]{
            ...,
            "relatedArticles":*[_type in [ "articleNews" , "article"] && references(^._id)]{
                "id":_id,
                title,
                "type":_type,
                description,
                "rawDate": _updatedAt,
                "imgBaseURL": coverPhoto.url,
                "imgAlt": coverPhoto.alt,
                "coverImageURL":coverImage.url,
                "coverImageAlt":coverImage.alt,
                "slug": slug.current
              },
            }
          }`

    let author = await $sanity.fetch(queryAuthor, params)
    return author
  },
  computed: {
    newsArticles() {
      return this.author.relatedArticles.filter(
        (article) => article.type == 'articleNews'
      )
    },
    articleArticles() {
      return this.author.relatedArticles.filter(
        (article) => article.type == 'article'
      )
    },
  },
  head() {
    let author = this.author

    return {
      title: `${author.name} - 2020 Writer Profile - Latest Apple News `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${author.description}`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${author.name}`,
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
          content: `https://allapplenews.com/articles/${author.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${author.name}`,
        },
        {
          property: 'og:description',
          content: `${author.description}`.replace(/<\/?[^>]+(>|$)/g, ''),
        },
        {
          property: 'og:image',
          content: `${author.profilePicture.url}`,
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
          property: 'article:author',
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
          content: `${author.title}`,
        },
        {
          name: 'twitter:description',
          content: `${author.description}`,
        },
        {
          name: 'twitter:image',
          content: `${author.profilePicture.url}`,
        },
      ],
    }
  },
  jsonld() {
    let author = this.author

    return {
      '@context': 'http://schema.org',
      '@type': ['ProfilePage'],
      '@id': `https://allapplenews.com/${author.slug.current}/`,
      about: {
        '@type': 'Person',
        name: `${author.name}`,
        description: `${author.description}`,
        // "sameAs": [
        //   "https://www.lifewire.com/alan-bradley-4781920"
        // ]
      },
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
      },
    }
  },
}
</script>

<style></style>
