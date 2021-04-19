<template>
  <div>
    <div
      class="w-screen px-5 pt-20 pb-5 mb-5 bg-white shadow dark:bg-darkmodediv 3xl:max-w-screen-xl lg:m-auto lg:mb-5 lg:mt-5 lg:pt-5 lg:max-w-screen-sm xl:max-w-screen-lg"
    >
      <h1>KHDev an AI & ML | Python | Webdev Blog</h1>
      <div class="prose max-w-none prose-green dark:text-gray-100">
        <p>Thank you for visiting my website.</p>
        <p>
          This is a space for me to write down thoughts and experiences that I
          gained while working on my own projects. This website was created in
          Nuxt.js with Nuxt-Content and Tailwindcss. This site is currently
          still a work in progress ToDo: Create an actual ToDo page, create
          taxonomy, optimize images (especially scaling/resizing for mobile),
          add projects (kinda like posts but more like card style with a link to
          github/projectpage and a short description) and add more posts.
        </p>

        <p>
          If you are interested in sporadic cooking and gardening pictures feel
          free to check out kevinhaeusler.com!
        </p>
      </div>
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
          :alt="article.alt"
          width="320px"
          height="320px"
        />
        <div class="p-5">
          <h2>{{ article.title }}</h2>
          <p class="font-mono text-yellow-600">
            {{ article.description }}
          </p>
          <p class="font-mono text-gray-800 dark:text-gray-300 lg:mb-5">
            Kevin Haeusler | {{ formatDate(article.createdAt) }}
          </p>
          <nuxt-content
            class="pb-5 prose whitespace-no-wrap overflow prose-green max-w-none dark:text-gray-100"
            :document="{ body: article.excerpt }"
          />
          <button
            class="float-left px-4 py-2 text-white bg-purple-900 shadow hover:bg-purple-600"
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
      .only([
        'title',
        'description',
        'excerpt',
        'slug',
        'img',
        'alt',
        'createdAt'
      ])
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
@media (min-width: 1024px) and (max-width: 1100px) {
  .overflow {
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
