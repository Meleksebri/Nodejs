const fs = require("fs");

fs.readdir(process.argv[2], function (err, list) {
  if (err) console.log(err);
  for (let i = 0; i < list.length; i++) {
    if (list[i].split(".")[1] === process.argv[3]) {
      console.log(list[i]);
    }
  }
});
