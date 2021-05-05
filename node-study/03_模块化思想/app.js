console.log(' ')
console.log('=>=>=>=>=>=>=>服务启动: http://127.0.0.1:3000/?name=zs&age=18======' + (new Date()).toString().split(' ')[4] + '==========')

const http = require('http')
const tools = require('../_util/tools')

function foo () {
  return '我是为抽离的方法（内部直接调用的fn()）'
}

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
  response.write('<head> <meta charset="UTF-8"></head>')

  if (request.url !== '/favicon.ico') {
    response.write('你好， nodejs<br/>')

    var msg1 = foo()
    response.write(msg1 + '<br/>')

    var msg2 = tools.myBar()
    response.write(msg2 + '<br/>')

    response.end()
  }
}).listen(3000)

// http://127.0.0.1:3000/?name=zs&age=18
