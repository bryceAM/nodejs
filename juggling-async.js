const http = require('http');
let files = [];
let count = 0;

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(files[i]);
    };
};

function httpGet(i) {
    http.get(process.argv[2 + i], (res) => {
        let responseData = '';

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            responseData += chunk;
        });
        res.on('end', () => {
            files[i] = responseData;
            count++;

            if (count === 3) printResults();
        });
    });
};

for (let i = 0; i < 3; i++) {
    httpGet(i);
};