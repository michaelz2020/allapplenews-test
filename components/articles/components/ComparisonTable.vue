<template>
  <div class="grid grid-cols-2 mb-4 max-w-xl mx-2 md:mx-auto space-x-2">
    <div class="p-4 border border-black">
      <p class="font-title">
        {{ itemOneTitle }}
      </p>
      <div class="mb-2" v-for="item in itemOneFeatures" :key="item">
        • {{ item }}
      </div>
    </div>
    <div class="p-4 border border-black">
      <p class="font-title">
        {{ itemTwoTitle }}
      </p>
      <div class="mb-2" v-for="item in itemTwoFeatures" :key="item">
        • {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemOneTitle: {
      type: String,
      default: 'Title 1',
    },
    itemOneFeatures: {
      type: Array,
    },
    itemTwoTitle: {
      type: String,
      default: 'Title 2',
    },
    itemTwoFeatures: {
      type: Array,
    },
  },
}
</script>
