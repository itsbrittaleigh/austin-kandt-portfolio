var glob = require('glob');
var path = require('path');

var dynamicRoutes = getDynamicPaths({
  '/brands': '/content/brands/*.json',
  '/illustrations': '/content/illustrations/*.json',
});

module.exports = {
  head: {
    title: 'Austin Kandt | Brand Strategist and Graphic Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Brand strategist, graphic designer, illustrator based in metro Detroit/Southeast Michigan' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  loading: { color: '#2aa8cc' },
  generate: {
    routes: dynamicRoutes
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    analyze: true,
  },
};

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
};
