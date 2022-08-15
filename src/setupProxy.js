const { createProxyMiddleware  } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://192.168.1.65:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}
