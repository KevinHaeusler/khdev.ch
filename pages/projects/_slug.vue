<template>
  <div>
    <img
      class="block object-cover w-screen p-0 m-auto mt-5 shadow 3xl:max-w-screen-xl h-80 lg:max-w-screen-sm xl:max-w-screen-lg"
      :src="require(`~/assets/resources/banner/${project.banner}`)"
      width="1280px"
      height="320px"
    />
    <project
      class="block px-3 py-8 mx-auto mb-20 bg-white shadow dark:bg-darkmodediv 3xl:max-w-screen-xl lg:max-w-screen-sm xl:max-w-screen-lg"
    >
      <div class="pl-5 text-gray-900 dark:text-gray-100 md:float-left">
        <a href="/">Home /</a>
        <a href="/projects-archive">Projects /</a>
        {{ project.title }}

        <p class="font-mono text-yellow-600 project-description">
          {{ project.description }}
        </p>
        <ul class="text-gray-900 toc dark:text-gray-100">
          <li
            v-for="link of project.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="md:float-right">
        <span class="text-gray-900 dark:text-gray-100"
          >created at: {{ formatDate(project.createdAt) }} <br />
          last updated at: {{ formatDate(project.updatedAt) }}</span
        >
        <p class="text-gray-900">Tags:</p>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
        <button>tag</button>
      </div>
      <div class="clear-both"></div>
      <div class="mt-2 prose prose-green max-w-none dark:text-gray-100">
        <h1>{{ project.title }}</h1>
        <nuxt-content :document="project" />
      </div>
      <div class="text-gray-900 align-left dark:text-gray-100">
        <a href="/">Home /</a>
        <a href="/archive">Blog /</a>
        {{ project.title }}
      </div>
    </project>
  </div>
</template>

<script>
import getSiteMeta from '@/plugins/getSiteMeta'
export default {
  scrollToTop: true,
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        ...this.meta,
        {
          property: 'project:published_time',
          content: this.project.createdAt
        },
        {
          property: 'project:modified_time',
          content: this.project.updatedAt
        },
        {
          property: 'project:tag',
          content: this.project.tags ? this.project.tags.toString() : ''
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Kevin Haeusler' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.project.tags ? this.project.tags.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://khdev.ch/blog/${this.$route.params.slug}`
        }
      ]
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'project',
        title: this.project.title,
        description: this.project.description,
        url: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        mainImage: this.project.image
      }
      return getSiteMeta(metaData)
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
