// const path = require('path')

// module.exports = {
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'http://localhost:3000'
//         }
//       }
//     }
//   }

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
};