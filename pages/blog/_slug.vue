<template>
  <div>
    <img
      class="block m-auto mt-5 p-0 w-screen 3xl:max-w-screen-xl h-80 shadow lg:max-w-screen-sm xl:max-w-screen-lg"
      :src="require(`~/assets/resources/banner/${article.banner}`)"
    />
    <article
      class="block mb-20 mx-auto px-3 py-8 3xl:max-w-screen-xl bg-white shadow lg:max-w-screen-sm xl:max-w-screen-lg"
    >
      <div class="pl-5 text-gray-900 md:float-left">
        <a href="/">Home /</a>
        <a href="/archive">Blog /</a>
        {{ article.title }}

        <p class="article-description text-yellow-600 font-mono">
          {{ article.description }}
        </p>
        <ul class="toc text-gray-900">
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="md:float-right">
        <span class="text-gray-900"
          >created at: {{ formatDate(article.createdAt) }} <br />
          last updated at: {{ formatDate(article.updatedAt) }}</span
        >
        <p class="text-gray-900">Tags:</p>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
      </div>
      <div class="clear-both"></div>
      <div class="prose prose-green mt-2 max-w-none">
        <h1>{{ article.title }}</h1>
        <nuxt-content :document="article" />
      </div>
      <div class="align-left text-gray-900">
        <a href="/">Home /</a>
        <a href="/archive">Blog /</a>
        {{ article.title }}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  scrollToTop: true
}
</script>

<style>
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.tag {
  width: 170px;
}

.toc {
  list-style: disclosure-closed;
}

.toc3 {
  margin-left: 0.5rem;
}

.shiki {
  padding: 1rem;
  overflow: scroll;
}
</style>
