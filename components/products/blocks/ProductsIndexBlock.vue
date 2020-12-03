<template>
  <div class="grid grid-rows-8 grid-cols-8 md:space-x-1 space-y-1">
    <div
      class="row-span-8 col-span-8 bg-bgLightGreyDark hover:bg-gray-300 p-4 md:p-12 md:ml-1"
    >
      <product-card-featured
        :productName="productFeatured.name"
        :productImageURL="productFeatured.imageBaseURL"
        :productOneLiner="productFeatured.seoDescription"
        :productSlug="productFeatured.slug"
      ></product-card-featured>
    </div>
    <div
      class="row-span-8 md:row-span-4 col-span-8 md:col-span-4 bg-bgLightGreyDark hover:bg-gray-300 p-4 md:p-12 ml-0"
    >
      <product-card-vertical
        :productName="productVertical.name"
        :productImageURL="productVertical.imageBaseURL"
        :productOneLiner="productVertical.seoDescription"
        :productSlug="productVertical.slug"
      ></product-card-vertical>
    </div>

    <div
      v-for="product in productsHorizontal"
      :key="product.id"
      class="flex items-center row-span-8 md:row-span-2 col-span-8 md:col-span-4 bg-bgLightGreyDark hover:bg-gray-300 p-4"
    >
      <product-card-horizontal
        :productName="product.name"
        :productImageURL="product.imageBaseURL"
        :productOneLiner="product.seoDescription"
        :productSlug="product.slug"
      ></product-card-horizontal>
    </div>

    <div
      v-for="product in productsSquare"
      :key="product.id"
      class="row-span-4 md:row-span-2 col-span-4 md:col-span-2 bg-bgLightGreyDark hover:bg-gray-300 p-2 md:p-8 odd:mr-1 md:odd:mr-0"
    >
      <product-card-square
        :productName="product.name"
        :productImageURL="product.imageBaseURL"
        :productOneLiner="product.seoDescription"
        :productSlug="product.slug"
      ></product-card-square>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productFeatured: {
      type: Object,
    },
    productVertical: {
      type: Object,
    },
    productsHorizontal: {
      type: Array,
    },
    productsSquare: {
      type: Array,
    },
  },
}
</script>
