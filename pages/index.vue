<template>
  <div class="lg:ml-10">
    <div
      class="mb-5 pb-5 pt-20 px-5 w-screen bg-white shadow lg:mt-5 lg:max-w-screen-lg"
    >
      <h1>Welcome to KHDev</h1>
      <p>
        Thank you for visiting my website. <br />
        This is a space for me to write down thoughts and experiences that I
        gained while working on my own projects. This website was created in
        Nuxt.js with Nuxt-Content and Ant Design Vue. This site is currently
        still a work in progress, see the ToDo in the sidebar for what is
        missing. (ToDo is also still missing).
        <br /><br />
        If you are interested in sporadic cooking and gardening pictures feel
        free to check out kevinhaeusler.com!
      </p>
    </div>
    <div
      class="mb-5 max-w-screen-lg bg-white shadow md:h-80"
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
            {{ article.description }} <br />
            Kevin Haeusler | {{ formatDate(article.createdAt) }}
          </p>
          <nuxt-content class="pb-5" :document="{ body: article.excerpt }" />
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

<style>
body {
  @apply text-gray-500 font-normal;
}
h1 {
  @apply text-black text-gray-900 text-2xl font-bold md:text-3xl lg:text-4xl;
}
h2 {
  @apply text-gray-800 text-xl font-medium;
}
</style>
