const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  css: {
    loaderOptions: {
      sass: {
        prependData:`
        @import "@/styles/_variables.scss";
        @import "@/styles/_utils.scss";
        @import "@/styles/_typo.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
      }
  }
}
}