const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    let serverData = '';

    res.setEncoding('utf8');

    res.on('data', (data) => {
        serverData += data;
    });
    

    res.on('end', () => {
        const charsReceived = serverData.length;
        process.stdout.write(charsReceived + '\n');
        process.stdout.write(serverData + '\n');
        /*
            //the following also works in place of process.stdout.write()'s:

            console.log(charsReceived);
            console.log(serverData);
        */
    });

    res.on('error', (error) => {
        console.log(`ResponseStreamError: ${error.message}`);
    });
});

/*
//Answer:
 'use strict'
    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/