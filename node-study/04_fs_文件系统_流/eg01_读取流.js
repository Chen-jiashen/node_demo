const fs = require('fs')

// 使用 fs.createReadStream(rFile) 函数创建并返回 fs.ReaderStream 类。
var fileReadStream = fs.createReadStream('./output.txt')

var count = 0
var str = ''

// 监控数据
fileReadStream.on('data', (chunk) => { // chunk : 分块 分块获取文件的
  ++count
  str += chunk
})

// 读取结束的时候，调用
fileReadStream.on('end', () => {
  console.log(str)
  console.log(count)
})

// 报错的时候调用
fileReadStream.on('error', (err) => {
  console.log(err)
})
