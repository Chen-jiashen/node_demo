const fs = require('fs')

// 创建一个可读流
var readStream = fs.createReadStream('./aaa.jpg')

console.log(readStream)
// // 创建一个可读=写流
var writeStream = fs.createWriteStream('./pipeFile/bbb.jpg') // 如果文件存在， 就会把文件清空

// // 管道读写操作
// // 读取input.txt 文件内容， 并将内容写入到 output.txt 中
readStream.pipe(writeStream)
readStream.on('error', (err) => {
  console.log(err)
})

console.log('程序执行完毕')
