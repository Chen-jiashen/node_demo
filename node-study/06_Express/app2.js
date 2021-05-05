/*
题目： 创建一个静态服务器
    1、可以让我们访问 web 服务器上面的网站
    2、可以让我们下载 web 服务器上面的文件
*/

/*
遇到的问题：
1、访问的 html 中会附带 css 和 js 的访问。
这个时候请求头中的 content-Type: 依旧是 text/html， 这样会使 js 和 css 失效。

优化:
当请求的 .css  => text/css
        .js   => text/css
        等等
解决思路： 封装一个模块， 专门处理后缀名的问题。

*/

// => 先创建一个服务
console.log('------------------------------------')
const http = require('http')
const fs = require('fs')
const path = require('path')
const URL = require('url')
// 自定义模块
const common = require('./myModule/common')

http.createServer(function (request, response) {
  // => 访问 http://127.0.0.1:3000/index.html
  // 时候，文件读取之后，返回到页面上去
  // let pathName = request.url
  // 用URL截取不包含参数的pathname。 http://127.0.0.1:3000/index.html?name=zs ==> /index.html
  let pathName = URL.parse(request.url).pathname
  pathName = pathName === '/' ? '/index.html' : pathName

  // 获取后缀
  const extName = path.extname(pathName)

  if (pathName !== '/favicon.ico') {
    // 根据 /index 获取对应文件地址， 读取出来并返回
    fs.readFile('./static' + pathName, async (err, data) => {
      // 方式一
      // const contentType = common.getMime(extName) + ';charset="utf-8"'
      // 方式二
      const contentType = await common.getFileMime(extName) + ';charset="utf-8"'
      // 方式三
      // const contentType = common.getFileMimeSync(extName) + ';charset="utf-8"'
      if (err) {
        response.writeHead(404, { 'Content-Type': contentType })
        response.end('404 ')
        return
      }
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(data)
    })
  }
}).listen(3000)

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
