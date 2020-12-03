<template>
  <div class="max-w-xl mx-2 md:mx-auto p-4 mb-4 border border-black">
    <h2 class="font-title mb-2">Summary</h2>

    <div v-for="(summaryItem, i) in summaryItems" :key="i" class="pl-4 mb-2">
      • {{ summaryItem.item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    summaryItems: {
      type: Array,
      default: () => [
        {
          _key: '11',
          item:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente perspiciatis totam quod dignissimos eum.',
        },
        {
          _key: '22',
          item:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente perspiciatis totam quod dignissimos eum.',
        },
        {
          _key: '33',
          item:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente perspiciatis totam quod dignissimos eum.',
        },
      ],
    },
  },
}
</script>
