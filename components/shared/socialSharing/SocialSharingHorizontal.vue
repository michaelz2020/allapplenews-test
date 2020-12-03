<template>
  <div class="flex">
    <ShareNetwork
      :network="email.network"
      :key="email.network"
      :url="slug"
      :title="title"
      :description="description"
      :quote="title"
      :hashtags="title"
      class="pa-2"
    >
      <instagram-icon></instagram-icon>
    </ShareNetwork>
    <ShareNetwork
      :network="facebook.network"
      :key="facebook.network"
      :url="slug"
      :title="title"
      :description="description"
      :quote="title"
      :hashtags="title"
      class="pa-2"
    >
      <facebook-icon></facebook-icon>
    </ShareNetwork>
    <ShareNetwork
      :network="pinterest.network"
      :key="pinterest.network"
      :url="slug"
      :title="title"
      :description="description"
      :quote="title"
      :hashtags="title"
      class="pa-2"
    >
      <pinterest-icon></pinterest-icon>
    </ShareNetwork>
    <ShareNetwork
      :network="twitter.network"
      :key="twitter.network"
      :url="slug"
      :title="title"
      :description="description"
      :quote="title"
      :hashtags="title"
      class="pa-2"
    >
      <twitter-icon></twitter-icon>
    </ShareNetwork>
</template>

<script>
export default {
  data() {
    return {
      email: {
        network: 'email',
        name: 'Email',
        link: '',
      },
      facebook: {
        network: 'facebook',
        name: 'Facebook',
        link: '',
      },
      pinterest: {
        network: 'pinterest',
        name: 'Pinterest',
        link: '',
      },
      twitter: {
        network: 'twitter',
        name: 'Twitter',
        link: '',
      },
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    quote: {
      type: String,
      default: '',
    },
    hashtags: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
}
</script>
