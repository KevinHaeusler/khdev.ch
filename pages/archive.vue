<template>
  <div class="home-page">
    <div class="articles">
      <div class="article" v-for="article of articles" :key="article">
        <nuxt-link :to="{name: 'blog-slug', params: { slug: article.slug}}">
          <div class="article-image">
            <img
              class="shadow"
              :src="require(`~/assets/resources/thumbnail/${article.img}`)"
            />
          </div>

          <div class="article-inner">
            <div class="detail">
              <h1>{{article.title}}</h1>
              <p class="article-description">
                {{ article.description }}, created at:
                {{ formatDate(article.createdAt) }}
              </p>
              <nuxt-content :document="{ body: article.excerpt }" />
              <span>Read more</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
async asyncData({$content, params}) {
  const articles = await $content('blog', params.slug)
    .only(['title', 'description', 'excerpt', 'slug','img','createdAt'])
    .sortBy('createdAt', 'desc')
    .fetch();

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
