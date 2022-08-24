let express = require('express');
let app = express();
let fs = require("fs");
let calcule = require('./network_speed.js');
let PORT = process.env.PORT || 5000

/* 
* The most suitable (with highest non-zero speed) network station for a device at a given point (x, y).
*/

 let data = {
     /* Stations represented by an array of x,y coordinates and r the reach of each station [x,y,r].*/
     "stations" : [
         [0, 0, 9],
         [20, 20, 6],
         [10, 0, 12],
         [5, 5, 13],
         [99, 25, 2]
     ],
     /* Points or devices coordinates (x,y) represented in cartesian coordinates by an array of [x,y].*/
     "points" : [
         [0, 0],
         [100, 100],
         [15, 10],
         [18, 18],
         [13, 13],
         [25, 99]
     ]
 }

app.use(express.json());

app.post('/calculate', function (req, res) {
      let bodyRequest = req.body; 
      let listResult = calcule.calculate(req.body.stations,req.body.points)
      res.setHeader('Content-Type', 'application/json');
      res.json(listResult);
})

app.get('/calculate', function (req, res) {
    let bodyRequest = data; 
    let listResult = calcule.calculate(bodyRequest.stations,bodyRequest.points)
    res.setHeader('Content-Type', 'application/json');
    res.json(listResult);
})


let server = app.listen(PORT, function () {
   let host = "0.0.0.0"
   let port = server.address().port
   console.log("Example app listening at http://%s:%s/calculate", host, port)
})

