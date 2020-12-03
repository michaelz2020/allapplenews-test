<template>
  <nav
    class="navigation-container flex sticky top-0 md:relative w-full items-center justify-start md:justify-between bg-white z-10"
  >
    <button class="mr-2 md:mr-4" aria-label="Open Menu" @click="drawer">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-6 md:w-10 h-6 md:h-10"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <nuxt-link to="/">
      <img :src="mainLogoURL" alt="Logo" class="h-5 md:h-12 w-auto md:pl-24"
    /></nuxt-link>
    <div class="hidden md:flex">
      <div class="flex items-end justify-end space-x-2">
        <facebook-icon class="text-color-navigation"> </facebook-icon>
        <instagram-icon class="text-color-navigation"></instagram-icon>

        <twitter-icon class="text-color-navigation"></twitter-icon>
        <email-icon class="text-color-navigation"></email-icon>
        <tiktok-icon class="text-color-navigation"></tiktok-icon>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
        <img :src="mainLogoURL" alt="Logo" class="h-auto w-32 mx-auto" />
      </span>
      <div
        class="flex flex-col justify-between p-4 space-y-4"
        @click="isOpen = false"
      >
        <nuxt-link
          v-for="link in sliderMenuLinks"
          :key="link.text"
          :to="{ path: `${link.slug}` }"
          class="font-bold text-2xl uppercase hover:text-accent"
        >
          {{ link.text }}
        </nuxt-link>
      </div>
      <div class="fixed bottom-0 w-full" @click="isOpen = false">
        <nuxt-link
          to="/"
          class="flex items-center p-4 text-white bg-bgDarkGrey hover:bg-black w-full transition duration-100 ease-in-out"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            ></path>
          </svg>
          <span>Subscribe</span>
        </nuxt-link>
        <div class="flex items-center justify-between p-4 bg-black space-x-2">
          <facebook-icon class="text-color-footer"> </facebook-icon>
          <instagram-icon class="text-color-footer"></instagram-icon>
          <twitter-icon class="text-color-footer"></twitter-icon>
          <email-icon class="text-color-footer"></email-icon>
          <tiktok-icon class="text-color-footer"></tiktok-icon>
        </div>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      mainLogoURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604529334/all_apple_news/website/logos/allapplenews-website-logos-heading_weefkd.png',
      sliderMenuLinks: [
        { text: 'news', slug: '/news/' },
        { text: 'articles', slug: '/articles/' },
        { text: 'systems', slug: '/systems/' },
        { text: 'apps', slug: '/apps/' },
        { text: 'products', slug: '/products/' },
        { text: 'wallpapers', slug: '/wallpapers/' },
        { text: 'about', slug: '/about/' },
      ],
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>
