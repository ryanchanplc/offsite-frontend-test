const constant = require('./utils/Const')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  console.log(constant)
  app.use(
    constant.PROXY_ENDPOINT_LIST,
    createProxyMiddleware({
      target: constant.API_DOMAIN_LIST,
      secure: false,
      changeOrigin: true,
    })
  )

  app.use(
    constant.PROXY_ENPOINT_DETAIL,
    createProxyMiddleware({
      target: constant.API_DOMAIN_DETAIL,
      secure: false,
      changeOrigin: true,
    })
  )
}
