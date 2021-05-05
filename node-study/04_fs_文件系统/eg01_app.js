/*
题目1：判断系统上面有没有 upload 目录。 如果没有就创建， 如果有，就不做操作

解题思路：
1、 先用 fs.stat 判断是是否存在这个目录
    err 不存在就创建，
2、 再判断 是目录 还是文件。
    是目录 => 得出结果， 不做操作
    是文件 => 创建目录。
*/

const fs = require('fs')

fs.stat('./upload', (err, state) => {
  if (err) { // 报错 => 存在这个文件
    // 创建这个目录
    fs.mkdir('./upload', () => {})
    return
  }

  if (state.isDirectory()) { // 状态为目录
    console.log('该文件目录存在')
  } else {
    // bug: 如果原先就存在一个 upload 的文件， 那么就会报错， 无法创建
    // 因此需要先删除 upload 文件
    fs.unlink('./upload', (err) => {
      if (!err) {
        fs.mkdir('./upload', () => {})
      }
    })
  }
})
