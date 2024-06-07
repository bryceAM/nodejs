const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err.message);
        return;
    }

    const lines = data.split('\n').length - 1;
    console.log(lines);
});