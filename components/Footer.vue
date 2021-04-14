<template>
  <div class="text-sm md:text-base">
    Kevin Haeusler@KHDev ©{{ currentDate.getFullYear() }} built with
    <a class="text-green-500 hover:text-green-400" href="https://nuxtjs.org/"
      >Nuxt</a
    >
    +
    <a
      class="text-yellow-600 hover:text-yellow-400"
      href="https://content.nuxtjs.org/"
      >Nuxt-Content</a
    >
    and
    <a
      class="text-indigo-400 hover:text-indigo-300"
      href="https://tailwindcss.com/"
      >TailwindCSS 2</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style></style>
