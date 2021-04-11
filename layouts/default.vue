<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap">
    <HeaderMobile
      v-if="$device.isMobileOrTablet"
      class="p-3 w-screen h-20 text-center text-white bg-stars lg:flex-initial lg:pl-80"
    />
    <Header
      v-if="$device.isDesktop"
      class="sticky z-10 top-0 p-3 w-screen h-14 text-center text-white bg-stars lg:flex-initial lg:pl-80"
    />
    <Sidebar
      v-if="$device.isDesktop"
      class="dark:from-tblack dark:via-tblack dark:to-sblack fixed mt-14 h-full dark:text-white bg-white bg-gradient-to-b shadow lg:flex-initial lg:w-80"
    />

    <Nuxt class="dark:bg-bgray pb-20 overflow-y-auto lg:flex-auto" />

    <Footer
      class="fixed bottom-0 p-3 w-screen h-14 text-center text-white bg-stars-inverted lg:flex-initial lg:pl-80"
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
</style>

<script>
export default {}
</script>
