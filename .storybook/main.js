const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    // extend config here
    return config
  },
  stories: [
    //Put stories in "stories" folder (or change to other folder - update paths)
    "../stories/**/*.stories.mdx", 
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-a11y',
  ]
})
