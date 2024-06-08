const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://resui-backend.resilientdb.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // Rewrites the URL path from /api to /api, maintaining the path suffix
      },
      logLevel: 'debug' // Optional: Enables logging for debugging purposes
    })
  );
};