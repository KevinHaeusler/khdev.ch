<template>
  <div class="flex flex-col bg-gray-50 lg:flex-row lg:flex-wrap">
    <Header
      v-if="$device.isDesktop"
      class="h-5vh p-3 w-screen text-center text-white bg-stars lg:flex-initial lg:pl-80"
    />
    <Sidebar
      v-if="$device.isDesktop"
      class="h-90vh z-10  bg-white shadow lg:flex-initial lg:w-80"
    />

    <Nuxt class="h-90vh overflow-y-auto lg:flex-auto" />

    <Footer
      class="h-5vh p-3 w-screen text-center text-white bg-stars-inverted lg:flex-initial lg:pl-80"
    />
  </div>
</template>

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

@media (min-width: 1024px) {
  .h-5vh {
    height: 5vh;
  }
  .h-90vh {
    height: 90vh;
  }
}
</style>

<script>
export default {}
</script>
