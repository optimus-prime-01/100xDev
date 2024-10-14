// // Asynchronous function  
// function sum(n) {  
//     let ans = 0;  
//     for (let i = 0; i <= n; i++) {  
//         ans += i;  
//     }  
//     return ans;  
// }  
// function find() {  
//     console.log(sum(100));  
// }  
// // Pass the function reference to setTimeout  
// setTimeout(find, 1000); // function waited for 1 sec to call so before it "hello" is printed, so works are done async.  
// console.log("hello");

//File system
const fs = require("fs");  
// fs.readFile("file.txt", "utf-8", function(err, data) {  
//     if (err) {  
//         console.error("Error reading file:", err);  
//         return;  
//     }  
//     console.log(data);  
// });  
// console.log("hello"); // "hello" will be printed first, then the data from file.txt will appear

//Promises
//my own async func
// function KiratReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("file.txt","utf-8",function(err,data){
//             resolve(data);
//         });
//     })
// }
// //callback function to call
// function ondone(data){
//     console.log(data);
// }
// var a=KiratReadFile();
// console.log(a); //return that a is the promise
// a.then(ondone);


//another type of promise
// function test() {  
//     let ans = new Promise(function(resolve) {  
//         resolve("hello");  
//     });  
//     return ans;  
// }  
// const val = test();  
// val.then(function(data) {  
//     console.log(data);  
// });

// Async function that returns a promise  
async function test() {  
    // Return a new Promise  
    let ans = new Promise(function(resolve) {  
        // Write your async logic  
        setTimeout(function() {  
            resolve("hello"); // Resolve the promise with "hello" after 3 seconds  
        }, 3000);  
    });  
    return ans; // Return the promise  
}  

// Main function to call test and log the value  
async function main() {  
    const value = await test(); // Wait for the test function to resolve  
    console.log(value); // Log the resolved value  
}  

// Call the main function  
main();  

// This will execute immediately  
console.log("hi");