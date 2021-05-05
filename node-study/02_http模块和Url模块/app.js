console.log(' ')
console.log('=>=>=>=>=>=>=>服务启动: http://127.0.0.1:3000/?name=zs&age=18======' + (new Date()).toString().split(' ')[4] + '==========')

const http = require('http')
const urlModule = require('url')
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })

  if (request.url !== '/favicon.ico') {
    var userInfo = urlModule.parse(request.url, true).query
    console.log(userInfo)
    response.write('<head> <meta charset="UTF-8"></head>')
    response.write('你好1111， nodejs')
    response.write(`<h1>我是：${userInfo.name}, 年龄： ${userInfo.age}</h1>`)
    response.end()
  }
}).listen(3000)

// http://127.0.0.1:3000/?name=zs&age=18
