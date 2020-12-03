<template>
  <div
    class="flex items-center justify-center py-4 px-3 space-x-2 max-w-lg mx-auto"
  >
    <div class="w-1/2 space-y-2">
      <div class="flex p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">Category</p>
          <p class="text-sm">{{ category }}</p>
        </div>
      </div>
      <div class="flex items-center justify-start p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">Developer</p>
          <p class="text-sm">{{ developer }}</p>
        </div>
      </div>
      <div class="flex items-center justify-start p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">Age Rating</p>
          <p class="text-sm">{{ ageRating }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/2 space-y-2">
      <div class="flex p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-1"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">
            In-app Purchases
          </p>
          <p class="text-sm">{{ inAppPurchase }}</p>
        </div>
      </div>
      <div class="flex items-center justify-start p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">Size</p>
          <p class="text-sm">{{ size }}</p>
        </div>
      </div>
      <div class="flex items-center justify-start p-1 md:p-2 space-x-3">
        <svg
          class="w-8 h-8 bg-black rounded-full p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ></path>
        </svg>
        <div>
          <p class="text-xs leading-none text-textDark uppercase">
            Compatibility
          </p>
          <p class="text-sm">{{ compatibility }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'General',
    },
    developer: {
      type: String,
      default: 'General',
    },
    ageRating: {
      type: String,
      default: 'General',
    },
    inAppPurchase: {
      type: String,
      default: 'General',
    },
    size: {
      type: String,
      default: 'General',
    },
    compatibility: {
      type: String,
      default: 'General',
    },
  },
}
</script>

<style></style>
