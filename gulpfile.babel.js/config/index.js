/* ['pages/index/index.njk', 'pages/index/about.html'] - multiple entry points */
/* ['pages/index/index.js', 'pages/index/about.js'] - multiple entry points */

const paths = {
  src: './src',
  dist: './dist',

  njk: {
    src: [
      'pages/main/main.njk',
      'pages/ui-page/ui-page.njk',
    ],
    dist: '',
  },

  styleSheets: {
    src: 'index.scss',
    dist: 'assets/css',
  },

  javaScripts: {
    src: 'index.js',
    dist: 'assets/js',
  },

  images: {
    src: 'images/**/*',
    dist: 'assets/img',
  },

  fonts: {
    src: 'fonts/**/*',
    dist: 'assets/fonts',
  },
};

const ftps = {
  host: 'host',
  user: 'user',
  password: 'password',
  folder: 'folder',
};

module.exports = {
  paths,
  ftps,
};
