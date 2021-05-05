console.log(' ')
console.log('=============================服务启动。。。=================================')

var http = require('http')
var url = require('url')
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })

  console.log(request.url)

  response.write('<head> <meta charset="UTF-8"></head>')
  response.write('你好1111， nodejs')
  response.end()
}).listen(3000)
