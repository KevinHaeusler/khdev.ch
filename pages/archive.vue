<template>
  <div>
    <div
      class="mb-5 bg-white shadow md:mt-20 md:h-80 lg:m-auto lg:mb-5 lg:max-w-screen-sm xl:max-w-screen-lg"
      v-for="article of articles"
      :key="article"
    >
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <img
          class="w-screen shadow md:float-left md:mr-5 md:w-80 md:h-80"
          :src="require(`~/assets/resources/thumbnail/${article.img}`)"
        />
        <div class="p-5">
          <h1>{{ article.title }}</h1>
          <p class="text-gray-800 font-mono">
            {{ article.description }}
          </p>
          <p class="text-gray-800 font-mono lg:mb-5">
            Kevin Haeusler | {{ formatDate(article.createdAt) }}
          </p>
          <nuxt-content
            class="overflow whitespace-no-wrap pb-5"
            :document="{ body: article.excerpt }"
          />
          <button
            class="float-left px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-700 rounded"
          >
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
