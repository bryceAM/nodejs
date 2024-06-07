const http = require('http');
const PORT = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.end('InvalidRequestError: request needs to be POST');
    };
    
    let response = '';

    req.on('data', (data) => {
        const stringifiedData = data.toString();
        response += stringifiedData.toUpperCase();
    });

    req.on('end', () => {
        res.write(response);
    });
});

server.listen(PORT);

// ANSWER:
/*
 'use strict'
    const http = require('http')
    const map = require('through2-map')
    
    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/