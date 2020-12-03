<template>
  <div class="my-4 px-8 space-y-2 text-center">
    <img
      class="block h-12 w-12 mx-auto"
      :src="iconURL"
      alt="allapplenews_icons"
    />
    <h2 class="font-title">{{ title }}</h2>
    <div class="mx-auto w-12 border-b-2 border-black"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit',
    },
    icon: {
      type: String,
      default: 'headingNumber1.svg',
    },
  },
  computed: {
    iconURL() {
      switch (this.icon) {
        case 'headingNumber1.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530061/all_apple_news/website/icons/allapplenews-website-icons-heading-number-1_vkvpn4.png'
        case 'headingNumber2.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-2_t57ev9.png'
        case 'headingNumber3.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-3_al4vb9.png'
        case 'headingNumber4.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530061/all_apple_news/website/icons/allapplenews-website-icons-heading-number-4_a2zlqk.png'
        case 'headingNumber5.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530061/all_apple_news/website/icons/allapplenews-website-icons-heading-number-5_vfs2qx.png'
        case 'headingNumber6.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530061/all_apple_news/website/icons/allapplenews-website-icons-heading-number-6_pgpefg.png'
        case 'headingNumber7.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530061/all_apple_news/website/icons/allapplenews-website-icons-heading-number-7_clyr5q.png'
        case 'headingNumber8.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-8_kgjeed.png'
        case 'headingNumber9.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-9_y5l2zy.png'
        case 'headingNumber10.svg':
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-10_fz2nev.png'
        default:
          return 'https://res.cloudinary.com/essentia-holdings/image/upload/v1604530062/all_apple_news/website/icons/allapplenews-website-icons-heading-number-10_fz2nev.png'
      }
    },
  },
}
</script>
