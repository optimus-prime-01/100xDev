const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const c = parseInt(a) + parseInt(b);
    res.send(c.toString()); 
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});
