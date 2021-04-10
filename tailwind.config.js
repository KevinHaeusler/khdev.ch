module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        stars: "url('~assets/resources/background/stars.webp')",

        'stars-inverted':
          "url('~assets/resources/background/stars-inverted.webp')",
        'stars-author': "url('~assets/resources/background/stars-author.webp')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
