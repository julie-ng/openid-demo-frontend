const path = require('path')
const fastify = require('fastify')({ logger: true })
const assets = require('fastify-static')
const proxy = require('fastify-http-proxy')
const port = process.env.PORT || 3000
const apiHost = process.env.API_HOST

fastify.register(assets, {
  root: path.join(__dirname, 'dist'),
  prefix: '/'
})

fastify.register(proxy, {
  upstream: apiHost,
  prefix: '/api'
})

// Let VueJS handle 404s
fastify.setNotFoundHandler((req, reply) => {
  fastify.log.warn('404')
  reply.sendFile('index.html')
})

fastify.listen({
  port: port,
  host: '0.0.0.0'
})
