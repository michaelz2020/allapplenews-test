<template>
  <div class="h-cardFeatured p-4 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 p-0 md:p-4">
      <section-heading-one
        headingTitle="404 Page Not Found"
      ></section-heading-one>
      <div class="p-4">
        <p class="font-bold md:text-xl mb-4">
          Sorry, it seems like some random robot has cut the wire of the page
          you are looking for, we will find it...
        </p>
        <p class="mb-8">
          Try using our search option to find the page you are looking for.
        </p>
        <NuxtLink
          :to="{ path: `/` }"
          class="w-64 py-2 px-8 mx-auto bg-black text-white text-center font-button border border-black hover-stacked"
          >Take Me Back Home</NuxtLink
        >
      </div>
    </div>
    <div class="md:w-1/2 my-4 p-4">
      <image-static
        :imageURL="imageURL"
        imageTransformation="q_auto,f_auto/"
        class=""
      ></image-static>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1587600942/tech-wick/Website%20Asssets/PNG/Pages/404/techwick-404-not-found_u9itnh.png',
    }
  },
}
</script>
