<template>
  <div class="bg-black">
    <div
      class="flex overflow-x-auto mx-auto max-w-6xl text-center py-2 md:py-3"
    >
      <nuxt-link
        v-for="link in sliderMenuLinks"
        :key="link.text"
        :to="{ path: `${link.slug}` }"
        class="w-48 px-4 text-white hover:underline whitespace-no-wrap text-sm"
      >
        {{ link.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderMenuLinks: [
        { text: 'iPhone 12', slug: '/products/iphone-12-and-12-mini/' },
        { text: 'iPhone 12 Pro', slug: '/products/iphone-12-pro-and-pro-max/' },
        { text: 'iPad Air', slug: '/products/ipad-air/' },
        { text: 'Air Tags', slug: '/products/airtags/' },
        { text: 'AirPods Pro', slug: '/products/airpods-pro/' },
        { text: 'Apple Watch 6', slug: '/products/apple-watch-series-6/' },
        { text: 'MacBook Air', slug: '/products/macbook-air-3rd-gen/' },
      ],
    }
  },
}
</script>
