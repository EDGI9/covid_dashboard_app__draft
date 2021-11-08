const path = require('path'); 
module.exports = {

  devServer: {
    https: true,
    port: parseInt(process.env.VUE_APP_PORT) || 3000,
    headers: { "Access-Control-Allow-Origin": "*"}
  },

  productionSourceMap: (process.env.VUE_APP_GENERATE_SOURCE_MAP === 'true'),

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'resources',
      enableInSFC: false
    }
  },

  configureWebpack: {  
    resolve: {  
      alias: {  
        '@': path.resolve(_dirname, 'src/') 
      },  
    },  
}

};
