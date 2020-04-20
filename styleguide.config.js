module.exports = {
  require: ['./src/style.css', './src/themes/light.css'],
  webpackConfig: require('./webpack.config.js'),
  usageMode: 'expand',
  exampleMode: 'collapse',
  pagePerSection: true,
  theme: {
    color: {
      base: 'var(--color-text-primary)',
      light: 'var(--color-text-secondary)',
      link: 'var(--color-primary)',
      linkHover: 'var(--color-primary-hover)',
      border: 'var(--color-border)',
      baseBackground: 'var(--color-bg-grey-4)',
      codeBackground: 'var(--color-bg-grey-2)',
      sidebarBackground: 'var(--color-bg-grey-3)',
      ribbonBackground: 'var(--color-bg-grey-1)',
      ribbonText: 'var(--color-text-primary)',
      name: 'var(--color-primary)',
      type: 'var(--color-highlighted)',
      error: 'var(--color-error)',
      codeBase: 'var(--color-text-primary)',
      codeComment: 'var(--color-text-disabled)',
      codePunctuation: 'var(--color-text-secondary)',
      codeProperty: 'var(--color-highlighted)',
      codeDeleted: 'var(--color-highlighted)',
      codeString: 'var(--color-primary)',
      codeInserted: 'var(--color-primary)',
      codeOperator: 'var(--color-alert)',
      codeKeyword: 'var(--color-chart-coral)',
      codeFunction: 'var(--color-chart-violet)',
      codeVariable: 'var(--color-chart-yellow)',
    },
    fontFamily: {
      base: 'var(--font-regular)',
      monospace: 'var(--font-code)',
    },
  },
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
        'src/PlayPauseButton/index.js',
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
        'src/Kebab/index.js',
        'src/FormItem/index.js',
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
