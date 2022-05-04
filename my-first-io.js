// importing the file system module
const fs = require("fs");
// reading our file content but not in a normal string format
let buffer = fs.readFileSync(process.argv[2]);
// turning the buffer into a string , splitting according to newline
const result = buffer.toString().split("\n").length - 1;
console.log(result);
