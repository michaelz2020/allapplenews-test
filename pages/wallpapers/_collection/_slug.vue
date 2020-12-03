<template>
  <div class="pt-4">
    <div
      class="flex flex-col justify-center items-center space-y-4 md:space-y-8"
    >
      <section-heading-one :headingTitle="wallpaper.name" class="text-center" />

      <image-wallpaper
        :imageURL="wallpaper.cloudinaryDownloadURL"
        :imageAlt="wallpaper.name"
        class="w-3/4 md:w-1/3"
      >
      </image-wallpaper>

      <a
        v-if="wallpaper.useUnsplash"
        :href="wallpaper.unsplashDownloadURL"
        class="flex justify-center space-x-2 rounded-md bg-black text-white font-button text-center py-2 px-4 mx-2 md:mx-auto hover:bg-bgDarkGrey transition-colors ease-in-out duration-150"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
        <span class="text-base">Download on Unsplash</span>
      </a>
      <button-download
        v-else
        :downloadLink="wallpaper.cloudinaryDownloadURL"
      ></button-download>

      <div class="bg-black w-full py-8 md:py-12">
        <h2 class="font-headline text-white text-center">Related Wallpapers</h2>
        <div
          class="max-w-6xl flex justify-start md:justify-center flex-no-wrap md:flex-wrap overflow-x-auto py-2 md:py-4 mx-auto space-x-6 md:space-x-0"
        >
          <template v-for="relatedWallpaper in relatedWallpapers">
            <nuxt-link
              :key="relatedWallpaper._id"
              :to="{
                path: `/wallpapers/collections/${relatedWallpaper.slug.current}/`,
              }"
            >
              <image-wallpaper
                :imageURL="relatedWallpaper.cloudinaryDownloadURL"
                :imageAlt="relatedWallpaper.name"
                class="min-w-md md:w-56 m-2 shadow-stackedHovered hover:shadow-stacked transition-shadow duration-150 ease-in-out"
              >
              </image-wallpaper
            ></nuxt-link>
          </template>
        </div>
      </div>
    </div>
    <subscribe-full-width-light />
  </div>
</template>

<script>
export default {
  async asyncData({ $sanity, params }) {
    const queryWallpaper = `{ "wallpaper": *[_type == "wallpaper" && slug.current == "${params.slug}"][0]{
        ...,
        "relatedWallpapers": *[_type=='wallpaper' && references(^.collection._ref)]{
            ...
        }
      }
    }`

    let wallpaper = await $sanity.fetch(queryWallpaper, params)
    return wallpaper
  },
  computed: {
    relatedWallpapers() {
      return this.wallpaper.relatedWallpapers
        .filter((wallpaper) => wallpaper._id !== this.wallpaper._id)
        .slice(0, 8)
    },
  },
  head() {
    let wallpaper = this.wallpaper

    return {
      title: `${wallpaper.name} | Free iPhone HD Wallpeprs - AllAppleNews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Download this amazing iPhone HD wallpepr for free 2020. For more information, please check the page.`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `iphone wallpaper, iphone wallpapers, HD wallpepr, aesthetic wallpaper, cute wallpapers`,
        },

        // Pinterest Pins
        {
          itemprop: 'name',
          content: `${wallpaper.name}`,
        },
        {
          property: 'article:section',
          content: `AllAppleNews`,
        },

        //Facebook Open Graph Tags
        // {
        //   property: 'article:section',
        //   content: `${appType.name}`
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
          content: `https://allapplenews.com/wallpapers/${wallpaper.slug.current}/`,
        },
        {
          property: 'og:title',
          content: `${wallpaper.name}`,
        },
        {
          property: 'og:description',
          content:
            'Download this amazing iPhone HD wallpepr for free 2020.For more information, please check the page.',
        },
        {
          property: 'og:image',
          content: `${wallpaper.cloudinaryDownloadURL}`,
        },
        {
          property: 'og:image:width',
          content: `1200`,
        },
        {
          property: 'og:image:height',
          content: `2500`,
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
          content: `${wallpaper.name}`,
        },
        {
          name: 'twitter:description',
          content: `Download this amazing iPhone HD wallpepr for free 2020. For more information, please check the page.`,
        },
        {
          name: 'twitter:image',
          content: `${wallpaper.cloudinaryDownloadURL}`,
        },
      ],
    }
  },
  jsonld() {
    let wallpaper = this.wallpaper

    return {
      '@context': 'https://schema.org',
      '@type': 'Newsapp',
      headline: `${wallpaper.name}`,
      datePublished: `${wallpaper._createdAt}`,
      dateModified: `${wallpaper._updatedAt}`,
      description: `Download this amazing iPhone HD wallpepr for free 2020.For more information, please check the page.`,
      image: {
        '@type': 'ImageObject',
        url: `${wallpaper.cloudinaryDownloadURL}`,
        height: 500,
        width: 500,
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
      mainEntityOfPage: {
        '@type': ['WebPage'],
        '@id': `https://allapplenews.com/${wallpaper.slug.current}/`,
      },
    }
  },
}
</script>
