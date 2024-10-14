const express = require("express");
const app = express();
app.use(express.json());

var users = [{
    name: "john",
    kidneys: [
        { healthy: false },
        { healthy: true }
    ]
}];

// GET route
app.get("/", function (req, res) {
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;

    for (let i = 0; i < numberofkidneys; i++) {
        if (johnkidneys[i].healthy) {
            numberofhealthykidneys++;
        }
    }

    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;

    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    });
});

// POST route
app.post("/", function (req, res) {
    const ishealthy = req.body.ishealthy;  //is passed in the raw body of the postman
    users[0].kidneys.push({
        healthy: ishealthy
    });
    res.json({
        msg: "done"
    });
});
// PUT route
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "All kidneys are now healthy"
    });
});
//DELETE route
app.delete("/",function(req,res){
    const newkidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys;
    res.json({
        msg:"done"
    })
})

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
