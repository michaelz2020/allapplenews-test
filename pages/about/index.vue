<template>
  <div class="page-container p-4 space-y-8 md:space-y-10">
    <section-heading-one
      headingTitle="About Us"
      class="text-center"
    ></section-heading-one>

    <div class="md:w-1/2 mx-auto">
      <h2 class="font-title mb-2">Why We Started All Apple News</h2>
      <p>
        Apple is one of the most popular brands in history. Whenever the new
        iPhone or AirPods come out, people are grabbing at the opportunity to
        own Apple’s products. Its success can be attributed to Apple managing to
        create an image synonymous with the ideas of simplicity and beauty.
      </p>
      <p>We want to create a website that matches those ideals.</p>
    </div>

    <div class="md:w-1/2 mx-auto">
      <h2 class="font-title mb-2">Our Guides</h2>
      <p>
        Our guides are comprehensive yet aesthetically pleasing. Our tutorials
        give easy-to-follow instructions but ensure you learn. Our news articles
        are always up-to-date and provide the latest information, whether it’s
        product releases or business dealings.
      </p>
      <p>
        There are plenty of pages out there that cover Apple and have an
        extensive history of covering Apple. So people ask, “why are you guys
        making another one?” Our answer is simple: because we think we can do
        better.
      </p>
    </div>

    <div class="md:w-1/2 mx-auto">
      <h2 class="font-title mb-2">Our Desire to be the Best</h2>
      <p>
        Whether it’s design, content or style, we think there’s always something
        we can improve upon. We realize that if we’re going to be covering a
        brand that’s all about innovation, we should follow in those footsteps.
      </p>
      <p>
        As new products come out every year and Apple continues to develop its
        technology, we’ll be there every step of the way. If you’re looking for
        the latest Apple news and information on your Apple products, make sure
        to subscribe to our page.
      </p>
      <p>We’ll make sure you stay up to date.</p>
    </div>

    <div class="md:w-1/2 mx-auto pb-4">
      <h2 class="font-title mb-2">Privacy Policy</h2>
      <p class="mb-4">
        Your privacy is important to us. Learn more about how we protect your
        data.
      </p>
      <button-white
        buttonLink="about/privacy-policy"
        buttonText="Learn More"
      ></button-white>
    </div>

    <div class="md:w-1/2 mx-auto pb-8">
      <h2 class="font-title mb-2">Our Team</h2>
      <p class="mb-4">
        If you have a passion about Apple products and you love writing, we want
        you! Check out our team page for available positions.
      </p>
      <button-white
        buttonLink="about/terms-of-use"
        buttonText="Learn More"
      ></button-white>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About Us - 2020 - AllAppleNews',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our story of why we started all apple news',
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: ['Apple', 'Tech News', 'Tech Tutorial'],
        },
      ],
    }
  },
  jsonld() {
    let meta = this.meta

    return {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      mainEntityOfPage: {
        '@type': 'Webpage',
        '@id': 'https://allapplenews.com/',
      },
      headline: `About Us - 2020 - AllAppleNews`,
      datePublished: '2020-10-12T22:23:19Z',
      dateModified: '2020-10-12T22:23:19Z',
      publisher: {
        '@type': 'Organization',
        name: 'All Apple News',
        url: 'https://allapplenews.com/',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/essentia-holdings/image/upload/v1602723841/all_apple_news/website/logos/aan_4_rsc_all-apple-news-logo-black_1_20201013_ey0syi.jpg',
          width: 500,
          height: 500,
        },
        brand: 'All Apple News',
        publishingPrinciples: 'https://allapplenews.com/about-us/',
        sameAs: [
          'https://www.instagram.com/all.applenews/',
          'https://www.facebook.com/allapplenews/',
          'https://www.tiktok.com/@all.applenews',
          'https://twitter.com/AllAppleNews2',
          'https://www.pinterest.ca/allapplenews1/',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '450 SW Marine Dr.',
          addressLocality: 'Vancouver',
          addressRegion: 'BC',
          postalCode: 'V6J 2R3',
          addressCountry: 'Canada',
        },
      },
    }
  },
}
</script>
