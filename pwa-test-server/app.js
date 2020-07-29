var express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
var env = require('dotenv').config()
var cors = require('cors')
var path = require('path')
var app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
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

app.listen(3001, function () {
  console.log('Server running on PORT 3001')
})
