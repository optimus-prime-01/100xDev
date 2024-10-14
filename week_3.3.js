// const express=require('express');
// const app=express();
// function isoldenoughmiddleware(req,res,next){
//     const age=req.query.age;
//     if(age>=14){
//         next();
//     }else{
//         res.json({
//             msg:"sorry! you are not eligible for the ride."
//         })
//     }
// }

// // app.use(isoldenoughmiddleware);--->this will apply the middleware to all the below get,push,put 
// //if you do not want to use above then pass it separately to the routes where you want to use that middleware

// app.get("/ride1",isoldenoughmiddleware,function(req,res){
//     res.json({
//         msg:"eligible for ride-1"
//     });
// });
// app.get("/ride2",isoldenoughmiddleware,function(req,res){
//     res.json({
//         msg:"eligible for ride-2"
//     });
// });
// const PORT=process.env.PORT||3015;
// app.listen(PORT,()=>{
//   console.log(`Server running on port ${PORT}`);
// });


// ////////////////////
// //if an user make more than 5 requests in one second then block them
// 

///////////
//error handling middleware
const express = require("express");
const app = express();
// Middleware that triggers an error
app.get("/cause-error", function(req, res, next) {
    const error = new Error("Something went wrong!");
    error.status = 500; // You can attach a status code to the error
    next(error); // Pass the error to the error-handling middleware
});
// Error-handling middleware
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message || "Internal Server Error"
        }
    });
});
app.get("/", function(req, res) {
    res.send("Hello, World!");
});
const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
