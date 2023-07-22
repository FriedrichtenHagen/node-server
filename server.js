const http = require('http')
const url = require('url');
const fs = require('fs');


const hostname = '127.0.0.1'
const port = 8000


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'html')

    const urlObject = url.parse(req.url, true)
    let fileName = '';


    switch(urlObject.pathname){
        case '/': {
            fileName = './pages/index.html'
            fs.readFile(fileName, (err, data) => {
                if(err){
                    console.log(err)
                }
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break
        }
        case '/about': {
            fileName = './pages/about.html'
            fs.readFile(fileName, (err, data) => {
                if(err){
                    console.log(err)
                }
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break
        }
        case '/contact': {
            fileName = './pages/contact.html'
            fs.readFile(fileName, (err, data) => {
                if(err){
                    console.log(err)
                }
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break
        }
        break;
        default: {
            res.end('404 this page does not exist bro')
        }
    }

    function getHtml(fileName, res){
        fs.readFile(fileName, (err, data) => {
            if(err){
                console.log(err)
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }


})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})