const fs = require("fs");
const path = require("path");
module.exports = function (dir, extension, callback) {
  var ext = "." + extension;
  fs.readdir(dir, function (err, files) {
    if (err) {
      callback(err, null);
    } else {
      var result = [];
      files.forEach(function (entry) {
        if (path.extname(entry) == ext) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
};
