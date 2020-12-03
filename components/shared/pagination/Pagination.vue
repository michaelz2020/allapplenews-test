<template>
  <ul class="my-8 list-none text-xl flex items-center justify-center">
    <!-- <li
      v-show="this.currentPage != 1"
      class="inline-block mr-4 text-color-navigation"
    >
      <nuxt-link :to="{ path: `/${folderName}/` }"> First </nuxt-link>
    </li> -->
    <li
      v-show="this.currentPage != 1"
      class="inline-block mr-6 bg-black rounded-full p-1 text-white hover:bg-bgGrayDarkHover"
    >
      <nuxt-link :to="{ path: `/${folderName}/${previousPage}/` }">
        <svg
          class="w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
      </nuxt-link>
    </li>

    <li v-for="page in pages" class="inline-block mr-6 text-color-navigation">
      <div
        v-if="page.isDisabled == true"
        class="text-textDark border border-textDark w-8 rounded-full text-center"
      >
        {{ page.name }}
      </div>
      <nuxt-link
        v-else-if="page.isFirstPage == true"
        :to="{ path: `/${folderName}/` }"
      >
        {{ page.name }}
      </nuxt-link>
      <nuxt-link v-else :to="{ path: `/${folderName}/${page.name}/` }">
        {{ page.name }}
      </nuxt-link>
    </li>

    <li
      v-show="this.currentPage != this.totalPages"
      class="inline-block mr-6 bg-black rounded-full p-1 text-white hover:bg-accent"
    >
      <nuxt-link :to="{ path: `/${folderName}/${nextPage}/` }">
        <svg
          class="w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </nuxt-link>
    </li>
    <!-- <li
      v-show="this.currentPage != this.totalPages"
      class="inline-block mr-6 text-color-navigation"
    >
      <nuxt-link :to="{ path: `/${folderName}/${totalPages}/` }">
        Last
      </nuxt-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: {
    folderName: {
      type: String,
      reqruied: true,
      default: '',
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    // totalPages: {
    //   type: Number,
    //   required: true
    // },
    resultsPerPage: {
      type: Number,
      required: false,
      default: 6,
    },
    total: {
      type: Number,
      required: true,
      default: 100,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.resultsPerPage)
    },
    previousPage() {
      const previousPage = Math.max(this.currentPage - 1, 1)
      if (previousPage == 1) {
        return ''
      } else {
        return previousPage
      }
    },
    nextPage() {
      return Math.min(this.currentPage + 1, this.totalPages)
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }
      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }
      // When in between
      return this.currentPage - 2
    },
    pages() {
      const range = []

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          isFirstPage: i == 1,
        })
      }
      return range
    },
  },
}
</script>
