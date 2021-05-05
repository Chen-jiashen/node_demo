console.log('------------------------------------------------')
//  http://localhost:3000/stkdata/data?marketcode=sz002605&cycle=1440&len=50&removeLast=0

const http = require('http')
const fs = require('fs')
const URL = require('url')

http.createServer(function (req, res) {
  // var pathName = '.' + req.url;
  let pathName = '.' + URL.parse(req.url).pathname
  console.log('pathName= ', pathName)

  //  req.url.indexOf('/');
  //  pathName = pathName.substring(1, pathName.length);

  console.log(pathName);

  if (fs.existsSync(pathName)) {
    fs.readFile(pathName, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'application/json;charset="utf-8"',
          'Access-Control-Allow-Origin': '*'
        })
        res.end('404')
        return
      }
      res.writeHead(200, {
        'Content-Type': 'application/json;charset="utf-8"',
        'Access-Control-Allow-Origin': '*'
      })
      res.end(data)
      return;
    });

  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json;charset="utf-8"',
      'Access-Control-Allow-Origin': '*'
    })
    res.end('The file is not exist！')
    return
  }
}).listen(3000)
console.log('Server running at http://127.0.0.1:3000/')
