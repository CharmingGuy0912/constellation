const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@luigiminardim/storybook-addon-globals-controls',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    // Storybook includes a loader rule for handling SVGs that conflicts with
    // the `@svgr/webpack` rule we want to add to load SVGs as React components.
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test('.svg'))
    const pathToInlineSvg = path.resolve(__dirname, '../src/components/Base/Icon/icons')
    fileLoaderRule.exclude = pathToInlineSvg

    config.module.rules.push({
      include: path.resolve(__dirname, '../src/'),
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  staticDirs: ['./static'],
}
