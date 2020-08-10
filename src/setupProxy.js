const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    ' ',
    createProxyMiddleware({
      target: 'http://localhost:8080/api/v1/employees',
      changeOrigin: true,
    })
  );
};