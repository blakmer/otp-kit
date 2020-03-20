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
        'src/Tag/index.js',
        'src/Textarea/index.js',
        'src/Toggler/index.js',
        'src/Tooltip/index.js',
        'src/Progress/index.js',
        'src/Uploader/index.js',
        'src/RoundProgress/index.js',
        'src/Locker/index.js',
        'src/Divider/index.js',
      ],
    },
    {
      name: 'Moleculs',
      components: [
        'src/Cards/index.js',
        'src/ColorSelection/index.js',
        'src/Filters/index.js',
        'src/Modal/index.js',
        'src/Notification/index.js',
        'src/StatePage/index.js',
        'src/Tabs/index.js',
        'src/List/index.js',
        'src/InfinityScroll/index.js',
        'src/ActionInput/index.js',
      ],
    },
    {
      name: 'Organisms',
      components: [
        'src/PageNotFound/index.js',
        'src/NavPanel/index.js',
        'src/Layout/index.js',
        'src/LogViewer/index.js',
      ],
    },
    {
      name: 'Charts',
      components: ['src/BarChart/index.js'],
    },
  ],
}
