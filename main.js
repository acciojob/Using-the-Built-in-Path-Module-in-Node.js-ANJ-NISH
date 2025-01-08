const path = require('path');

// TODO: Use path.join to join two file path segments

// TODO: Print the resulting path to the console


const args=process.argv.slice(2);

console.log(path.join(args[0],args[1]));
