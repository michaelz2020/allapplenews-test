<template>
  <div
    class="max-w-2xl w-full px-4 py-12 sm:px-6 lg:py-16 lg:px-12 border border-textDark bg-white shadow-stacked"
  >
    <h2
      class="mb-3 text-2xl leading-8 font-extrabold tracking-tight text-black sm:text-3xl sm:leading-9"
    >
      Want products news and updates?
    </h2>
    <p
      class="mb-5 max-w-3xl text-lg leading-6 text-gray-800"
      id="newsletter-headline"
    >
      Sign up for our newsletter to stay up to date.
    </p>

    <form
      class="sm:flex"
      aria-labelledby="newsletter-headline"
      name="newsletterSignup"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="newsletterSignup" />
      <input
        aria-label="Email address"
        type="email"
        name="email"
        required
        class="appearance-none w-full max-w-md px-5 py-3 border border-textDark text-base leading-6 text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-600 transition duration-150 ease-in-out"
        placeholder="Enter your email"
      />
      <div class="mt-3 shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button class="button button-black" type="submit">Subscribe Now</button>
      </div>
    </form>
    <p class="mt-3 text-sm leading-5 text-gray-800">
      We care about the protection of your data. Read our
      <nuxt-link
        to="/about/privacy-policy/"
        class="text-black font-medium underline"
      >
        Privacy Policy.
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribeImageURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1604528610/all_apple_news/website/icons/allapplenews-website-icons-news_rosjul.png',
    }
  },
}
</script>

<style></style>
