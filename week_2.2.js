    const express = require('express')
    const app = express()
    const port = 3002
    app.use(express.json()); 
    //This code sets up a route for GET requests to the root URL (/). 
    //When someone accesses this URL, the server responds with the text "Hello World!".
    app.get('/',function (req, res) {
        // console.log(req.headers[authorization])//-->from postman
        res.send('Hello World!')
    })

    app.post('/conversations', function(req, res) {  
       
        res.send({  
            msg: "2+2=4"  
        });  
    }); 
    //This line starts the server and makes it listen on the specified port (3000).
    // The callback function logs a message to the console indicating that the server is running.
    app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
    })
