<template>
  <div class="bg-black w-full md:w-64 my-3 p-8 md:p-4">
    <h2 class="font-title capitalize text-white mb-4">
      Latest Apple News delivered to your inbox everyday
    </h2>

    <form
      class=""
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
        class="appearance-none w-full px-3 py-2 mb-2 border border-transparent text-base leading-6 text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
        placeholder="Enter your email"
      />

      <button class="button button-accent w-full" type="submit">
        Subscribe Now
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>
