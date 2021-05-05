console.log('=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>')

const md5 = require('md5')

const sd = require('silly-datetime')

console.log(md5('123456'))
console.log(sd.format(new Date(), 'YYYY-MM-DD HH-mm'))
