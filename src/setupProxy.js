const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    process.env.PROXY_ENDPOINT_LIST,
    createProxyMiddleware({
      target: process.env.API_DOMAIN_LIST,
      secure: false,
      changeOrigin: true,
    })
  )

  app.use(
    process.env.PROXY_ENPOINT_DETAIL,
    createProxyMiddleware({
      target: process.env.API_DOMAIN_DETAIL,
      secure: false,
      changeOrigin: true,
    })
  )
}
