<template>
  <div class="page-container md:py-4">
    <section-heading-one
      headingTitle="Terms of Use"
      class="text-center"
    ></section-heading-one>

    <client-only>
      <section class="prose prose-sm sm:prose md:text-black mx-auto">
        <BlockContent
          :blocks="page.body"
          :v-if="page.body"
          :serializers="serializers"
        />
      </section>
    </client-only>
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  components: {
    BlockContent,
  },
  async asyncData({ $sanity, params }) {
    const queryTermsPage = `{ "page": *[_type == "page" && slug.current == "terms-of-use"][0]{
      ...,
      
    }
  }`

    let page = await $sanity.fetch(queryTermsPage, params)
    return page
  },
  head() {
    return {
      title: 'Terms of Use - All Apple News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn more about our Terms of Use.',
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: ['Apple', 'Apple News', 'Apple Tutorial'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h2,
h3,
p,
ol,
ul {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  @media (min-width: 768px) {
    padding-right: 0rem;
    padding-left: 0rem;
  }
}
</style>
