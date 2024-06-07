const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const fileURL = process.argv[3];

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(fileURL);
    readStream.pipe(res)
})
server.listen(port)

/*
// ANSWER:

'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/