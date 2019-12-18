const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8888
http.createServer((req, res) => {

  if (req.url === '/') {
    const html = fs.readFileSync(
      path.resolve(__dirname, './index.html'), 
      'utf-8'
    )
    res.end(html)
  }

}).listen(port, () => {
  console.log(`server is running on ${port}`)
})

