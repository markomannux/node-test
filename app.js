// content of index.js
const http = require('http')
require('dotenv').config()
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {  

  if (request.url === "/killme") {
      response.statusCode = 500;
      response.statusMessage = "Goobye Cruel World"
      response.end()
      throw new Error("Killing myself")
  }

  response.end("requested: " + request.url)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})