// const express = require("express");  
// const app = express();  

// // Middleware for basic authentication  
// const authenticate = (req, res, next) => {  
//     const username = req.headers.username;  
//     const password = req.headers.password;  

//     // Check credentials  
//     if (username === "harkirat" && password === "pass") {  
//         next(); // Credentials are valid, proceed to the next middleware or route  
//     } else {  
//         return res.status(401).json({ msg: "Unauthorized: Invalid username or password" });  
//     }  
// };  

// // Middleware for kidney ID validation  
// const validateKidneyID = (req, res, next) => {  
//     const kidneyID = req.query.kidneyID;  
//     if (kidneyID === "1" || kidneyID === "2") {  
//         next(); // Valid kidney ID, proceed to the next middleware or route  
//     } else {  
//         return res.status(400).json({ msg: "Bad Request: Invalid kidney ID" });  
//     }  
// };  

// // Health check route with authentication and validation middleware  
// app.get("/health-checkup", authenticate, validateKidneyID, (req, res) => {  
//     return res.json({ msg: "Your kidney is fine!" });  
// });  

// // Start the server  
// app.listen(3005, () => {  
//     console.log("Server running on port 3005");  
// });

//  Global Catches
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/health-checkup", function(req, res) {
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;
//     res.send("You have " + kidneyLength + " kidneys");
// });

// app.use(function(err, req, res, next) {
//     res.json({
//         msg: "Something is up with our server!"
//     });
// });

// app.listen(3005, () => {
//     console.log("Server running on port 3005");
// });

//Zod

// const express = require("express");
// const app = express();
// const zod = require("zod");
// const schema = zod.array(zod.number());
// app.use(express.json());
// app.post("/", function(req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if(!response.success){
//         res.status(411).json({
//             msg:"input is invalid"
//         })
//     }else{
//         res.send({
//             response
//         })
//     }
// });
// app.listen(3005, () => {
//     console.log("Server running on port 3005");
// });

//Another Zod example
// {
//     email:string
//     password:string
//     country:IN or US
// }
const express = require("express");
const app = express();
const zod = require("zod");
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.enum(["IN", "US"])
});
app.use(express.json());
app.post("/", function(req, res) {
    const { email, password, country } = req.body;
    const response = schema.safeParse({ email, password, country });
    if (!response.success) {
        res.status(400).json({
            msg: "Invalid input",
            errors: response.error.errors
        });
    } else {
        res.json({
            msg: "Valid input",
            data: response.data
        });
    }
});
app.listen(3005, () => {
    console.log("Server running on port 3005");
});

