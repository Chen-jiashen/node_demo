const fs = require('fs')

// 使用 fs.createReadStream(rFile) 函数创建并返回 fs.ReaderStream 类。
var fileWriteStream = fs.createWriteStream('./input.txt')

var data = ''
for (let i = 0; i < 500; ++i) {
  data = data + '我是要写入的数据111111\n'
}

fileWriteStream.write(data, 'UTF-8') // 写入文件

fileWriteStream.on('error', (err) => {
  console.log(err)
})
// 标记写入完成之后，调用end
fileWriteStream.end()

// 只有调用了 end() 才能监听到 finish. 否则不会生效
fileWriteStream.on('finish', () => {
  // 一般在这位置 做异步返回结果的处理
  console.log('标记打印完成')
})
