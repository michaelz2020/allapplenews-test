<template>
  <a
    :href="imageDownloadURL"
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
    <span class="text-base">Download for Free</span>
  </a>
</template>

<script>
export default {
  props: {
    downloadLink: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageDownloadURL() {
      let index = this.downloadLink.indexOf('upload') + 7
      let transformation = 'fl_attachment/'
      let result =
        this.downloadLink.slice(0, index) +
        transformation +
        this.downloadLink.slice(index, this.downloadLink.length)

      return result
    },
  },
}
</script>

<style></style>
