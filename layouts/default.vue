<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap">
    <Header
      class="sticky top-0 z-10 w-screen p-3 text-center text-white h-14 bg-stars lg:flex-initial lg:pl-80 dark:border dark:border-bgray dark:bg-darkmodebgimg"
    />
    <HeaderMobile
      v-if="$vssWidth <= 768"
      class="h-20 p-3 text-center bg-stars dark:bg-darkmodebgimg"
    />
    <Sidebar
      v-else
      class="fixed h-full bg-white shadow dark:bg-darkmodebgimg mt-14 dark:border-bgray dark:border lg:flex-initial lg:w-80"
    />

    <Nuxt
      class="pb-20 overflow-y-auto dark:bg-darkmodebg lg:flex-auto lg:ml-80"
    />

    <Footer
      class="fixed bottom-0 w-screen p-3 text-center text-white h-14 bg-stars-inverted dark:bg-darkmodebgimg lg:flex-initial lg:pl-80 dark:border dark:border-bgray"
    />
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin]
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  @apply text-gray-700 dark:text-white font-normal bg-gray-50;
}

h1 {
  @apply text-green-500 text-2xl font-bold md:text-3xl lg:text-4xl;
}

h2 {
  @apply text-green-500 text-xl font-semibold md:text-2xl lg:text-3xl;
}

h3 {
  @apply text-green-500 text-lg font-semibold md:text-xl lg:text-2xl;
}
</style>
