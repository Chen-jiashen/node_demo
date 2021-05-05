/*
题目1：查询 wwwroot 目录下面的所有文件， 并将所有目录，全部压缩在一个数组中

解题思路：
1、 先用 fs.readdir 获取目录下 所有的目录和文件名 Arr

2、 循环遍历 Arr 下面的名字， 通过 stat 判断是否是 目录名， 如果是，就压入结果数组中
*/

/*
解决思路：
  方式一： 使用立即执行函数 + 递归去解决这个问题
*/
const fs = require('fs')
const path = './wwwroot'

const retDirs = []
fs.readdir(path, (err, files) => {
  if (!err) {
    // console.log(files) // [ 'css', 'html', 'index.html', 'js', 'readme.md' ]

    // 开始循环 递归方式
    (function getDir (i) {
      if (i === files.length) {
        console.log(retDirs)
        return
      }
      const p = path + '/' + files[i]
      fs.stat(p, (err, data) => {
        if (!err && data.isDirectory()) {
          retDirs.push(files[i])
        }
        getDir(i + 1)
      })
    })(0)

    // 非递归， 注意结果 ret 打印的位置， 要放在异步函数内部
    /*
    for (let i = 0; i < files.length; ++i) {
      const p = path + '/' + files[i];
      (function getDir (n) {
        console.log(p)
        fs.stat(p, (err, data) => {
          if (!err && data.isDirectory()) {
            retDirs.push(files[i])
          }
          if (n === (files.length - 1)) {
            console.log(retDirs)
          }
        })
      })(i)
    }
     */
  }
})
