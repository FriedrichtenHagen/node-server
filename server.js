// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World von Friedrich\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
const fs = require('fs');

const https = require('https')
const options = { 
    hostname: 'example.com',
    port: 443, 
    path: '/todos', 
    method: 'GET', 
}

const req = https.request(options, res => { 
    console.log(`statusCode: ${res.statusCode}`)

})