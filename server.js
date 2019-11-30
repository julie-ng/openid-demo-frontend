const path = require('path')
const fastify = require('fastify')({ logger: true })
const assets = require('fastify-static')
const proxy = require('fastify-http-proxy')
const port = process.env.PORT || 3000
const apiHost = process.env.API_HOST

// fastify.register(require('fastify-sensible'))
fastify.register(assets, {
  root: path.join(__dirname, 'dist'),
  prefix: '/'
})

fastify.register(proxy, {
  upstream: apiHost,
  prefix: '/api/',
  replyOptions: {
    onResponse: (req, reply, res) => {
      // handle redirects
      console.log(res.headers)
      if ([301, 302, 303, 307].includes(res.statusCode)) {
        let i = res.rawHeaders.indexOf('Location')
        if (i > -1) {
          let location = res.rawHeaders[i + 1]
          reply.redirect(location)
        }
      } else {
        reply.send(res)
      }
      // fastify.log.warn('/Api Code? ', res.statusCode)
      // console.log(res.rawHeaders)
      // (res.statusCode < 400)
      // 	? reply.send(res)
      // 	: reply.send(fastify.httpErrors.badGateway())
      // reply.send(res)
    }
  }
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
