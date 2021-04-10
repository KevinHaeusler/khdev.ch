<template>
  <div>
    <img
      class="shadow banner"
      :src="require(`~/assets/resources/banner/${article.banner}`)"
    />
    <article>
      <div class="align-left">
        <a-breadcrumb>
          <a-breadcrumb-item><a href="/">Home</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="/archive">Blog</a></a-breadcrumb-item>
          <a-breadcrumb-item>{{ article.title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <reading-time :content="article.body"></reading-time>

        <p class="article-description">{{ article.description }}</p>
        <ul class="toc">
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="align-right">
        <span class="article-description"
          >created at: {{ formatDate(article.createdAt) }} <br />
          last updated at: {{ formatDate(article.updatedAt) }}</span
        >
        <p class="article-description">Tags:</p>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
      </div>
      <div style="clear: both"></div>

      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />

      <a-breadcrumb>
        <a-breadcrumb-item><a href="">Home</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Blog</a></a-breadcrumb-item>
        <a-breadcrumb-item>{{ article.title }}</a-breadcrumb-item>
      </a-breadcrumb>
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
article {
  display: block;
  margin: 0 auto;
  padding: 10px 30px;
  margin-bottom: 84px;
  width: 1400px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.banner {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 1400px;
  height: 300px;
  padding: 0;
}

.align-left {
  float: left;
}

.align-right {
  float: right;
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
  padding: 5px;
}
@media (max-width: 1024px) {
  article {
    display: block;
    margin: 0 auto;
    padding: 10px 30px;
    margin-bottom: 20px;
    width: 100%;
    background: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }
  .banner {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 100%;
    object-fit: cover;
    padding: 0;
  }
  .align-right {
    float: left;
  }
}
</style>
