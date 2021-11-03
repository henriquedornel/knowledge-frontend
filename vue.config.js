module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
  },

  pwa: {
    themeColor: '#000',
    msTileColor: '#fff',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      name: 'Base de Conhecimento',
      short_name: 'Base de Conhecimento',
      description: 'Base de Conhecimento',
      url: '/auth',
      start_url: '/auth',
      display: 'standalone',
      background_color: '#226699',
      theme_color: '#000',
      icons: [
        {
          src: 'img/icons/favicon-567x567.png',
          sizes: '567x567',
          type: 'image/png',
        },
        {
          src: 'img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
    },
  },
};
