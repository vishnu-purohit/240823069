const path=require("path");
console.log(path.dirname(__filename));
console.log(path.extname("hitu.txt"));


const moment=require("moment");
console.log(moment().format("DD-MM-YYYY HH:MM"));
console.log(moment().format("dddd"));


const fs=require("fs");

data="jay shree krishn"
fs.writeFile("test.txt",data, 
function(err){
    if(err) throw err;
    console.log("file saved successfully");
});

fs.writeFile("test.txt","utf8", 
function(err){
    if(err) throw err;
    console.log("content",data);
});

fs.appendFile("test.txt","radhe radhe", 
function(err){
    if(err) throw err;
    console.log("file apended successfully");
});

fs.unlink("2.txt", 
function(err){
    if(err) throw err;
    console.log("file deleted successfully");
});