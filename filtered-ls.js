const fs = require('fs');
const isDevMode = false;
const directory = (isDevMode && __dirname) || process.argv[2];

fs.readdir(directory, function (err, list) {
    if (err) console.log('Error: Problem reading directory');

    const filteredList = list.filter((entry) => entry.endsWith(`.${process.argv[3]}`));

    filteredList.forEach(elem => {
        console.log(elem);
    });
}, 'utf8');

/*
ANSWER:

    'use strict'
    const fs = require('fs')
    const path = require('path')
    
    const folder = process.argv[2]
    const ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/