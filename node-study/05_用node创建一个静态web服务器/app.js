/*
题目： 创建一个静态服务器
    1、可以让我们访问 web 服务器上面的网站
    2、可以让我们下载 web 服务器上面的文件
*/

// => 先创建一个服务
console.log('------------------------------------')
const http = require('http')
const fs = require('fs')

http
  .createServer(function (request, response) {
    // => 访问 http://127.0.0.1:3000/index.html
    // 时候，文件读取之后，返回到页面上去
    let pathName = request.url
    console.log(pathName)
    console.log('--------')
    pathName = pathName === '/' ? '/index.html' : pathName
    if (pathName !== '/favicon.ico') {
      // 根据 /index 获取对应文件地址， 读取出来并返回
      fs.readFile('./static' + pathName, (err, data) => {
        if (err) {
          response.writeHead(404, {
            'Content-Type': 'text/html;charset="utf-8"'
          })
          response.end('404 ')
          return
        }
        response.writeHead(200, {
          'Content-Type': 'text/html;charset="utf-8"'
        })
        response.end(data)
      })
    }
  })
  .listen(3000)

console.log('Server running at http://127.0.0.1:3000/')

/*
遇到的问题：
1、访问的 html 中会附带 css 和 js 的访问。
这个时候请求头中的 content-Type: 依旧是 text/html， 这样会使 js 和 css 失效。

优化:
当请求的 .css  => text/css
        .js   => text/css
        等等

2、
http://127.0.0.1:3000/index.html
http://127.0.0.1:3000/index

由于是拼接的fs访问地址， 当使用 /index 会访问不到 index.html 文件
*/
