<template>
  <div
    class="hidden md:flex justify-center text-center text-sm divide-x divide-textLight divide-textDark md:py-3 border-b border-textLight"
  >
    <nuxt-link
      v-for="link in horizontalMenuLinks"
      :key="link.text"
      :to="{ path: `${link.slug}` }"
      class="w-32 px-4 text-black hover:underline"
    >
      {{ link.text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horizontalMenuLinks: [
        { text: 'news', slug: '/news/' },
        { text: 'articles', slug: '/articles/' },
        { text: 'products', slug: '/products/' },
        { text: 'apps', slug: '/apps/' },
        { text: 'systems', slug: '/systems/' },
        { text: 'wallpapers', slug: '/wallpapers/' },
        { text: 'about', slug: '/about/' },
      ],
    }
  },
}
</script>
