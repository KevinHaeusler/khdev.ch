<template>
  <div>
    <div class="pb-5 bg-stars-inverted">
      <img
        class="logo-image"
        src="~/assets/resources/logo/khdev-logo-white.webp"
        alt="KHDev Logo White"
      />
      <img
        class="author-image mx-auto my-5 border-4 border-white rounded-full"
        src="~/assets/resources/author/kevin_haeusler.png"
        alt="Kevin Haeusler"
      />
    </div>

    <div class="author-description dark:text-white dark:bg-gray-900">
      <span class="author-name">Kevin Haeusler</span>
      <span class="author-tagline">Opensource Supporter, Hobby Gardener </span>
      <div class="author-socials">
        <a href="mailto:mail@khdev.ch/"> eMail |</a>
        <a
          href="https://discordapp.com/users/120560434263621634"
          target="_blank"
        >
          Discord |</a
        >
        <a href="https://github.com/KevinHaeusler/" target="_blank">
          Github |</a
        >
        <a
          href="https://www.linkedin.com/in/kevin-haeusler-3b1a12b2/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <nuxt-link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
      <span class="inline">Home</span>
    </nuxt-link>
    <br />
    <nuxt-link to="/archive">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
      <span class="inline">Blog</span>
    </nuxt-link>
    <br />
    <nuxt-link to="/about">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
      <span class="inline">About</span>
    </nuxt-link>
    <button>Toggle</button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
