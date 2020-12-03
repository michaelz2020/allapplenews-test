<template>
  <footer class="bg-black">
    <div class="navigation-container">
      <div class="grid grid-cols-12 pt-4 pb-8 space-x-8">
        <div class="col-span-12 md:col-span-6 mb-8 md:mb-0 p-2 md:p-0 space-y-4 ">\
          <nuxt-link to="/">
          <img class="w-12 h-12" :src="logoIconURL" alt="allapplenews_icon"></img></nuxt-link>
          <p class="text-lg capitalize text-gray-400 sm:pr-16">
           Get the most from your Apple products at All Apple News
          </p>
          <div class="text-xs text-gray-600  sm:pr-20">All Apple News isn’t endorsed by Apple Inc and doesn’t reflect the views or opinions of Apple Inc. or anyone officially involved in producing or managing Apple Inc. </div>
        </div>
        <div class="col-span-6 md:col-span-3">
          <h4
            class="inline-block text-xs leading-5 text-gray-400 tracking-wider uppercase border-b border-gray-400"
          >
            products
          </h4>
          <ul class="mt-4 space-y-4">
            <li v-for="link in footerMenuLeft" :key="link.text">
              <nuxt-link
                :to="{ path: `${link.slug}` }"
                class="text-lg leading-6 text-gray-400 hover:text-white"
              >
                {{ link.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-6 md:col-span-3">
          <h4
            class="inline-block text-xs leading-5 text-gray-400 tracking-wider uppercase border-b border-gray-400"
          >
            Sections
          </h4>
          <ul class="mt-4 space-y-4">
            <li v-for="link in footerMenuRight" :key="link.text">
              <nuxt-link
                :to="{ path: `${link.slug}` }"
                class="text-lg leading-6 text-gray-400 hover:text-white"
              >
                {{ link.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-gray-700 pt-8 px-2 md:px-0 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between xl:mt-0"
      >
        <div class="space-y-2">
          <h4
            class="inline-block text-xs leading-5 text-gray-400 tracking-wider uppercase border-b border-gray-400"
          >
            Subscribe to our newsletter
          </h4>
          <p class="text-base leading-6 text-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <form
          class="sm:flex sm:max-w-lg"
          aria-labelledby="newsletter-headline"
          name="newsletterSignup"
          method="post"
          netlify
          netlify-honeypot="bot-field"
        >
          <label for="emailAddress" class="sr-only">Email address</label>
          <input type="hidden" name="form-name" value="newsletterSignup" />
          <input
            aria-label="Email address"
            type="email"
            name="email"
            required
            class="appearance-none min-w-0 w-full bg-white border border-transparent py-2 px-4 text-base leading-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs md:max-w-md"
            placeholder="Enter your email"
          />
          <div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="w-full bg-white text-black border border-transparent py-2 px-4 flex items-center justify-center text-base leading-6 font-medium hover:bg-indigo-400 focus:outline-none focus:border-indigo-600 focus:shadow-outline-indigo active:bg-indigo-600 transition duration-150 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div
        class="mt-8 px-2 md:px-0 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <facebook-icon class="text-color-footer"></facebook-icon>
          <instagram-icon class="text-color-footer"></instagram-icon>
          <twitter-icon class="text-color-footer"></twitter-icon>
          <email-icon class="text-color-footer"></email-icon>
          <tiktok-icon class="text-color-footer"></tiktok-icon>
        </div>
        <p class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
          &copy; 2020 All Apple News, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logoIconURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1606171486/all_apple_news/website/logos/allapplenews-website-logos-white-logo_ghidt6.png',
      footerMenuLeft: [
        { text: 'iPhone 12', slug: '/products/iphone-12-and-12-mini/' },
        { text: 'iPhone 12 Pro', slug: '/products/iphone-12-pro-and-pro-max/' },
        { text: 'iPad Air', slug: '/products/ipad-air/' },
        { text: 'Air Tags', slug: '/products/airtags/' },
        { text: 'AirPods Pro', slug: '/products/airpods-pro/' },
        { text: 'Apple Watch 6', slug: '/products/apple-watch-series-6/' },
      ],
      footerMenuRight: [
        { text: 'news', slug: '/news/' },
        { text: 'articles', slug: '/articles/' },
        { text: 'systems', slug: '/systems/' },
        { text: 'apps', slug: '/apps/' },
        { text: 'products', slug: '/products/' },
        { text: 'wallpapers', slug: '/wallpapers/' },
      ],
    }
  },
}
</script>

<style></style>
