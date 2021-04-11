<template>
  <div class="text-sm md:text-base">
    Kevin Haeusler@KHDev ©{{ currentDate.getFullYear() }} built with
    <a class="hover:text-green-400 text-green-500" href="https://nuxtjs.org/"
      >Nuxt</a
    >
    +
    <a
      class="hover:text-yellow-400 text-yellow-600"
      href="https://content.nuxtjs.org/"
      >Nuxt-Content</a
    >
    and
    <a
      class="hover:text-indigo-300 text-indigo-400"
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
