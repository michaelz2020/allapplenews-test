<template>
  <div
    class="hidden md:inline-block w-64 p-1 mt-10 border border-textDark cursor-pointer hover:border-accent"
    @click="cardClicked"
  >
    <image-static
      :imageURL="wallpaperBannerURL"
      imageAlt="allapplenews_wallpaper"
      imageTransformation="w_1000/"
    >
    </image-static>
    <p class="p-2 text-lg">Download HD iPhone Wallpapers for Free Now</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallpaperBannerURL:
        'https://res.cloudinary.com/essentia-holdings/image/upload/v1606263366/all_apple_news/website/banners/allapplenews-banners-sidebanner-2_feo3zn.jpg',
    }
  },
  methods: {
    cardClicked() {
      this.$router.push(`/wallpapers/`)
    },
  },
}
</script>
