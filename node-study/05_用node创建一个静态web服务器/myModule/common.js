
// 根据文件后缀名 进行匹配。 如： index.html ==> text/html
exports.getMime = function (extName) {
  // 直接引入的方式， 也不知道对不对
  const memiObj = require('./mine.json')
  return memiObj[extName] || 'text/html'
}

//  通过异步的方式， 读取 mime.json
// 由于调用的地方也是异步的， 所以这儿需要使用 async await
const fs = require('fs')
exports.getFileMime = function (extName) {
  return new Promise((resolve, reject) => {
    fs.readFile('./myModule/mine.json', (err, data) => {
      if (err) {
        reject(err)
      }
      const mimeObj = JSON.parse(data.toString())
      resolve(mimeObj[extName] || 'text/html')
    })
  })
}

//  用 fs 中封装好了 sync 同步方法， 这样就不用使用 promise
exports.getFileMimeSync = function (extName) {
  var data = fs.readFileSync('./myModule/mine.json')
  const mimeObj = JSON.parse(data.toString())
  return (mimeObj[extName] || 'text/html')
}
