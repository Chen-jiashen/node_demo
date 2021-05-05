/*
题目1：查询 wwwroot 目录下面的所有文件， 并将所有目录，全部压缩在一个数组中

解题总思路：
1、 先用 fs.readdir 获取目录下 所有的目录和文件名 Arr

2、 循环遍历 Arr 下面的名字， 通过 stat 判断是否是 目录名， 如果是，就压入结果数组中
*/

/*
解决思路：
  方式二： 使用 async await 来解决异步嵌套的问题
*/
const fs = require('fs')
const rootPath = './wwwroot'

const retDirs = []

// 先封装 stat, 判断是否是目录还是文件名
async function isDir (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      if (data.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

// 获取所有的目录和文件， 然后循环遍历，判断
(function main (path) {
  fs.readdir(path, async (err, arr) => {
    if (err) {
      console.log(err)
    }
    for (let i = 0; i < arr.length; i++) {
      if (await isDir(path + '/' + arr[i])) {
        retDirs.push(arr[i])
      }
    }
    console.log(retDirs)
  })
})(rootPath)
