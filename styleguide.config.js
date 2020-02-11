module.exports = {
  require: ['./src/style.css', './src/docs.css'],
  webpackConfig: require('./webpack.config.js'),
  usageMode: 'expand',
  exampleMode: 'collapse',
  pagePerSection: true,
  title: 'OTP Styleguide',
  getComponentPathLine(path) {
    const matches = /src\/([A-z]*)\//.exec(path)
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
      components: [
        'src/Grid/index.js',
        'src/Typography/index.js',
        'src/Icon/index.js',
        'src/Logo/index.js',
      ],
    },
    {
      name: 'Atomic',
      components: [
        'src/Badge/index.js',
        'src/Breadcrumb/index.js',
        'src/Button/index.js',
        'src/Checkbox/index.js',
        'src/DatePicker/index.js',
        'src/Dropdown/index.js',
        'src/Input/index.js',
        'src/Link/index.js',
        'src/Pagination/index.js',
        'src/RadioGroup/index.js',
        'src/RoundButton/index.js',
        'src/Select/index.js',
        'src/Slider/index.js',
        'src/Stepper/index.js',
        'src/Textarea/index.js',
        'src/Tooltip/index.js',
        'src/Progress/index.js',
      ],
    },
    {
      name: 'Moleculs',
      components: [
        'src/Modal/index.js',
        'src/Notification/index.js',
        'src/Tabs/index.js',
      ],
    },
  ],
}
