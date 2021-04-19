<template>
  <div>
    <div class="pb-5 bg-stars-inverted dark:bg-darkmodebgimg dark:shadow">
      <img
        src="~/assets/resources/logo/khdev-logo-white.webp"
        height="106px"
        width="320px"
        alt="KHDev Logo White"
      />
      <img
        class="mx-auto my-5 border-4 border-white rounded-full hover:border-green-400"
        src="~/assets/resources/author/kevin_haeusler.webp"
        height="250px"
        width="250px"
        alt="Kevin Haeusler"
      />
    </div>

    <div class="mt-5 dark:text-white">
      <p class="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Kevin Haeusler
      </p>
      <p class="text-center text-gray-700 dark:text-gray-300">
        Opensource Supporter, Hobby Gardener
      </p>

      <div class="text-center text-green-500">
        <a class="hover:text-green-400" href="mailto:mail@khdev.ch/">
          eMail |</a
        >
        <a
          class="hover:text-green-400"
          href="https://discordapp.com/users/120560434263621634"
          target="_blank"
        >
          Discord |</a
        >
        <a
          class="hover:text-green-400"
          href="https://github.com/KevinHaeusler/"
          target="_blank"
        >
          Github |</a
        >
        <a
          class="hover:text-green-400"
          href="https://www.linkedin.com/in/kevin-haeusler-3b1a12b2/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div class="mt-5 ml-5 text-justify">
        <nuxt-link class="hover:text-green-400" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex w-5 h-5 mb-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <span class="inline-flex">Home</span>
        </nuxt-link>
        <br />
        <nuxt-link class="hover:text-green-400" to="/projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex w-5 h-5 mb-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
          <span class="inline">Projects</span>
        </nuxt-link>
        <br />
        <nuxt-link class="hover:text-green-400" to="/archive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex w-5 h-5 mb-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clip-rule="evenodd"
            />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
          <span class="inline">Blog</span>
        </nuxt-link>
        <br />
        <nuxt-link class="hover:text-green-400" to="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex w-5 h-5 mb-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="inline">About</span>
        </nuxt-link>
      </div>
      <br />

      <button
        class="fixed bottom-0 mb-16 ml-72 hover:text-green-400"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style></style>
