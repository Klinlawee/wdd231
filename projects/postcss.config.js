module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['src/css'] // Where to look for @import files
    }),
    require('postcss-preset-env')({
      stage: 3, // Which CSS features to polyfill
      features: {
        'nesting-rules': true // Enable CSS nesting
      }
    }),
    require('cssnano')({
      preset: 'default' // Minify CSS
    })
  ]
}