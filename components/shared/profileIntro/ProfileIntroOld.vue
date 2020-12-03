<template>
  <div class="w-full flex items-center justify-between p-6 space-x-3">
    <img
      class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
      alt="allapplenewsauthor"
    />
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="mb-2 text-gray-800 text-sm leading-3 truncate">
          {{ views }}
        </h3>
        <!-- <span
          class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full"
          >Admin</span
        > -->
      </div>
      <p class="font-caption-bold">
        {{ author }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    views: {
      type: String,
      default: '1.2K Views',
    },
    author: {
      type: String,
      default: 'Curits Joe',
    },
  },
}
</script>

<style></style>
