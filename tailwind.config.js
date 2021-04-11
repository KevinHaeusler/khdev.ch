module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1920px'
      },
      backgroundImage: (theme) => ({
        stars: "url('~assets/resources/background/stars.webp')",

        'stars-inverted':
          "url('~assets/resources/background/stars-inverted.webp')",
        'stars-author': "url('~assets/resources/background/stars-author.webp')"
      }),
      colors: {
        tblack: '#131C25',
        sblack: '#0E121B',
        tgray: '#2F2F2F',
        bgray: '#121212'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
