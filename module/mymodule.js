const fs = require('fs');

module.exports = function (dir, ext, cb) {

    fs.readdir(dir, (err, files) => {
        if (err) return cb(err);
    
        const filteredFiles = files.filter((file) => file.endsWith(`.${ext}`));

        cb(null, filteredFiles);
    });
};

/*
ANSWER:

    'use strict'
    const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
 */