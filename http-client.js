const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('data', function (data) {
        process.stdout.write(data + '\n');
    });

    res.on('error', (error) => {
        console.log(`'ResponseStreamError: ${error.message}`);
    });
}).on('error', (error) => {
    console.log(`GetRequestError: ${error.message}`);
});

// Answer:
// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   }).on('error', console.error)

/*
    Note when console.log is passed as a callback, Node.js invokes it as console.log()
    and automatically passes in the error or data event that occurred to invoke it.
    So console.log is only needed instead of a console.log(data) or console.log(error).
*/