<template>
  <div>
    <div
      class="w-screen px-5 pt-20 pb-5 mb-5 prose bg-white shadow dark:bg-darkmodediv prose-green max-w-none 3xl:max-w-screen-xl dark:text-gray-100 lg:m-auto lg:mb-5 lg:mt-5 lg:pt-5 lg:max-w-screen-sm xl:max-w-screen-lg"
    >
      <h1>Blog Archive</h1>
      <p>All posts sorted from last to first.</p>
    </div>
    <div
      v-for="article of articles"
      :key="article"
      class="mb-5 bg-white shadow dark:bg-darkmodediv 3xl:max-w-screen-xl md:h-80 lg:m-auto lg:mb-5 lg:max-w-screen-sm xl:max-w-screen-lg"
    >
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <img
          class="w-screen shadow md:float-left md:mr-5 md:w-80 md:h-80"
          :src="require(`~/assets/resources/thumbnail/${article.img}`)"
        />
        <div class="p-5">
          <h1>{{ article.title }}</h1>
          <p class="font-mono text-yellow-600">
            {{ article.description }}
          </p>
          <p class="font-mono text-gray-800 dark:text-gray-300 lg:mb-5">
            Kevin Haeusler | {{ formatDate(article.createdAt) }}
          </p>
          <nuxt-content
            class="pb-5 whitespace-no-wrap overflow dark:text-gray-100"
            :document="{ body: article.excerpt }"
          />
          <button class="float-left px-4 py-2 text-white bg-purple-900 shadow">
            Read more
          </button>
          <p class="float-right">Tags</p>
          <div class="clear-both"></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'excerpt', 'slug', 'img', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style></style>
