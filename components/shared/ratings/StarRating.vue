<template>
  <div class="flex space-x-1">
    <svg v-for="i in max" class="w-5 h-5" viewBox="0 0 510 510">
      <defs v-if="isCurrentStar(i)">
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" class="gradient-start" />
          <stop :offset="getStarPercentage(i)" class="gradient-start" />
          <stop :offset="getStarPercentage(i)" class="gradient-end" />
          <stop offset="100%" class="gradient-end" />
        </linearGradient>
      </defs>
      <polygon
        points="255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472 139.103,318.011 97.41,497.25"
        :class="getStarClass(i)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 4.5,
    },
  },
  data() {
    return {
      max: 5,
    }
  },
  methods: {
    isCurrentStar(index) {
      const diff = this.rating - index + 1
      return diff > 0 && diff < 1
    },
    getStarPercentage(index) {
      return (this.rating - (index - 1)) * 100 + '%'
    },
    getStarClass(index) {
      const classNames = ['star']
      this.rating > index - 1 && classNames.push('filled')
      index === parseInt(this.rating) + 1 && classNames.push('gradient')
      return classNames.join(' ')
    },
  },
}
</script>

<style lang="scss">
.star {
  stroke-width: 3rem;
  stroke: #000;
  display: inline-block;
  fill: transparent;

  &.filled {
    fill: #000;
  }

  &.gradient {
    fill: url(#grad);
  }
}

.gradient-start {
  stop-color: #000;
  stop-opacity: 1;
}

.gradient-end {
  stop-color: transparent;
  stop-opacity: 1;
}
</style>
