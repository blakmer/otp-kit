module.exports = {
  require: ['./src/assets/style.css', './src/assets/docs.css'],
  webpackConfig: require('./webpack.config.js'),
  usageMode: 'expand',
  exampleMode: 'collapse',
  pagePerSection: true,
  title: 'OTP Styleguide',
  getComponentPathLine(path) {
    const matches = /src\/[a-z]*\/([A-z]*)\//.exec(path)
    if (matches) return `import ${matches[1]} from 'otp-kit/lib/${matches[1]}'`
    return 'Parsing path error'
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Development',
          content: 'docs/development.md',
        },
      ],
    },
    {
      name: 'Base',
      components: 'src/base/*/index.js',
    },
    {
      name: 'Atomic',
      components: 'src/atomic/**/index.js',
    },
  ],
}
