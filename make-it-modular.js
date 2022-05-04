var mod = require("./mymodule");

mod(process.argv[2], process.argv[3], function (err, files) {
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
