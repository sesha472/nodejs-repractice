const os= require('os');

const path =require('path');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
// C:\Users\DELL\OneDrive\Desktop\nodejs
// sample.js
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.cpus());


// console.log(__dirname);//foldername shows

// console.log(__filename);//include filename shows 
// C:\Users\DELL\OneDrive\Desktop\nodejs
// C:\Users\DELL\OneDrive\Desktop\nodejs\sample.js