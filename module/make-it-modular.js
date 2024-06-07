const fileLogger = require('./mymodule');
const directory = process.argv[2];
const extension = process.argv[3];


fileLogger(directory, extension, (err, files) => {
    if (err) {
        console.log(err);
        return;
    };

    files.forEach(file => console.log(file));
});