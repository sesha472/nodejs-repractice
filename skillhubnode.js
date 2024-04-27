// var http=require('http');
// 1.
// by using http module we can create server and render a content in server 
// http.createServer((req,res)=>{ //in browser if we wnat to get url data we can use req ,if shhow data in browser use res
//     res.write("hellow word sesha");
//     res.end();
// }).listen(8080);


// 2.
// if we want to get params in urls and show in browser we can use req.url 
// http.createServer((req,res)=>{ //in browser if we wnat to get url data we can use req ,if shhow data in browser use res
//     res.write("this is the url parameter data : "+req.url); //this is the url parameter data : /dataoftheurl 
//     res.end();
// }).listen(8080);
// the above all about http module 


// 1.file system module 

// var http=require('http');
// var fs=require('fs');  //create file and show the content in that file in server we nned http module as well 

// 1.reading file 
// http.createServer((req,res)=>{
//     fs.readFile('text.txt',(error,data)=>{
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);


// 2. adding content to existing file 
// http.createServer((req,res)=>{
//     fs.appendFile('text.txt',"added text2 ",(error,data)=>{ //added the text to existing content 
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);




// 3.overriding contnet in file or create a new file with given content 
// http.createServer((req,res)=>{
//     fs.writeFile('text.txt',"new text overrides",(error,data)=>{ //over ride the text in that file
//         res.write(data);
//         res.end();
//         console.log("server is runing ...");
//     })
   
// }).listen(8080);



// 4.deleting file 
// http.createServer((req,res)=>{
//     fs.unlink('text.txt',(error)=>{ //it delets the existing file
//         if(error){
//             throw error; //if there no file if we r trying to dlt throw error 
//         }
//         console.log("file deleted...");
//     })
   
// }).listen(8080);



// for handling urls to reseive url parameter values we cant get by using this 
// if we are using multi page application we send datat from one page to another using params to handle propery we use url module 

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


// node js npm  module 

// there are many libs avialbe in npm  so we can instal and use in our node js like this with exmaple 
// npm i upper case ->is a pakge in npm 

// var http = require('http')
// http.createServer((req,res)=>{ //in browser if we wnat to get url data we can use req ,if shhow data in browser use res
//         res.write("hellow word".toUpperCase());
//         res.end();
//     }).listen(8080)
 