/*
题目1：查询 wwwroot 目录下面的所有文件， 并将所有目录，全部压缩在一个数组中

解题思路：
1、 先用 fs.readdir 获取目录下 所有的目录和文件名 Arr

2、 循环遍历 Arr 下面的名字， 通过 stat 判断是否是 目录名， 如果是，就压入结果数组中
*/

const fs = require('fs')
const path = './wwwroot'

const retDirs = []
fs.readdir(path, (err, files) => {
  if (!err) {
    // console.log(files) // [ 'css', 'html', 'index.html', 'js', 'readme.md' ]

    // 开始循环
    for (let i = 0; i < files.length; ++i) {
      const p = path + files[i]
      fs.stat(p, (err, data) => {
        if (!err && data) {
          retDirs.push(files[i])
        }
      })
    }
  }
})

console.log(retDirs) // err: 结果输出为空， 因为这个fs方法是异步的

/*
解决思路：
  方式一： 使用立即执行函数 + 递归去解决这个问题
  方式二： 使用nodejs 8.X中的 async await 去处理这个问题
*/
