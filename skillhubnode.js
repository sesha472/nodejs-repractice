var http=require('http');
var fs=require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('text.txt',(error,data)=>{
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);






// http.createServer((req,res)=>{
//     fs.appendFile('text.txt',"added text2 ",(error,data)=>{ //added the text to existing content 
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);





// http.createServer((req,res)=>{
//     fs.writeFile('text.txt',"new text overrides",(error,data)=>{ //over ride the text in that file
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);





// http.createServer((req,res)=>{
//     fs.unlink('text.txt',(error)=>{ //it delets the existing file
//         if(error){
//             throw error;
//         }
//         res.end();
//         console.log("file deleted...");
//     })
   
// }).listen(8080);




// var url=require('url');

// var adress='https://www.youtube.com/watch?v=MY2Vxtfn5Tw&list=PLWnZ0qt0PImX5gSpIIdDypupK4qRxLJv4'

// var q=url.parse(adress,true);
// console.log(q.hostname);// www.youtube.com
// console.log(q.path); //watch?v=MY2Vxtfn5Tw&list=PLWnZ0qt0PImX5gSpIIdDypupK4qRxLJv4
// console.log(q.pathname); //?v=MY2Vxtfn5Tw&list=PLWnZ0qt0PImX5gSpIIdDypupK4qRxLJv4
// console.log(q.search);


// var adress2='http://localhost:8080/home.html?year=2024&&date=21'

// var q=url.parse(adress2,true);
// console.log(q.hostname);// localhost
// console.log(q.path); ///home.html?year=2024&&date=21
// console.log(q.pathname); ///home.html
// console.log(q.search); //quary params //->?year=2024&&date=21
