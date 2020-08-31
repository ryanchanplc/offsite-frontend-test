var express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const port = process.env.PORT || 3000
var cors = require('cors')
var path = require('path')
var app = express()
require('dotenv').config()
app.use(cors())
app.use(express.static(path.join(__dirname, './build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

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

app.listen(port, function () {
  console.log('Server running on PORT ' + port)
})
