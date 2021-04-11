<template>
  <nav
    class="fixed z-10 flex items-center justify-between px-6 w-full h-16 text-gray-700 dark:text-white bg-white"
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
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed z-10 inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="dark:from-tblack dark:via-tblack dark:to-sblack fixed z-30 left-0 top-0 w-64 h-full bg-white bg-gradient-to-b overflow-auto transform transition-all duration-300 ease-in-out"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex items-center p-4 w-full h-20 bg-stars-author shadow"
      >
        <img
          src="~/assets/resources/logo/khdev-logo-white.webp"
          alt="Logo"
          class="mx-auto w-32 h-auto"
        />
      </span>

      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:text-white hover:bg-indigo-500"
      >
      </span>
      <div class="ml-5 mt-5 text-justify">
        <nuxt-link class="hover:text-green-400" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex mb-1 w-5 h-5"
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
        <nuxt-link class="hover:text-green-400" to="/archive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex mb-1 w-5 h-5"
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
            class="inline-flex mb-1 w-5 h-5"
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

      <div class="fixed bottom-0 mb-5 w-full">
        <button @click="toggle" class="hover:text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex mb-1 w-5 h-5"
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
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == 'light' ? 'dark' : 'light'
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
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  }
}
</script>
