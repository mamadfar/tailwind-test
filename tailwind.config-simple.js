module.exports = {
  purge: [
    './*.html',
    './assets/**/*.js',
    './assets/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'shadows': 'Shadows Into Light'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
