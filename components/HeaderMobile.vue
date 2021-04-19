<template>
  <nav
    class="fixed z-10 flex items-center justify-between w-full h-16 px-6 text-gray-700 bg-white dark:text-white"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img
        src="~/assets/resources/logo/khdev-logo-white.webp"
        width="96px"
        height="32px"
        alt="Logo"
        class="w-24 h-auto"
      />
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        ></div>
      </div>
    </transition>
    <aside
      class="fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white dark:bg-darkmodebg"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        class="flex items-center w-full h-20 p-4 shadow bg-stars-author dark:bg-darkmodebgimg"
        @click="isOpen = false"
      >
        <img
          src="~/assets/resources/logo/khdev-logo-white.webp"
          alt="Logo"
          width="128px"
          height="42px"
          class="w-32 h-auto mx-auto"
        />
      </span>

      <span
        class="flex items-center p-4 hover:text-white hover:bg-indigo-500"
        @click="isOpen = false"
      >
      </span>
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
        <nuxt-link class="hover:text-green-400" to="/projects-archive">
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
        <nuxt-link class="hover:text-green-400" to="/blog-archive">
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

      <div class="fixed bottom-0 w-full mb-5">
        <button class="hover:text-green-400" @click="toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex w-5 h-5 mb-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          Toggle Dark Mode
        </button>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
