var express = require('express');
var app = express();
var fs = require("fs");
const calcule = require('../network_speed.js');
const PORT = process.env.PORT || 5000

/* 
* The most suitable (with highest non-zero speed) network station for a device at a given point (x, y).
*/

/* 
* Stations represented by an array of x,y coordinates and r the reach of each station [x,y,r].
*/
// const stations = [
//     [0, 0, 9],
//     [20, 20, 6],
//     [10, 0, 12],
//     [5, 5, 13],
//     [99, 25, 2]
// ];

/*
* Points or devices coordinates (x,y) represented in cartesian coordinates by an array of [x,y].
*/
// const points = [
//     [0, 0],
//     [100, 100],
//     [15, 10],
//     [18, 18],
//     [13, 13],
//     [25, 99]
// ];

// data = {
//     "stations" : [
//         [0, 0, 9],
//         [20, 20, 6],
//         [10, 0, 12],
//         [5, 5, 13],
//         [99, 25, 2]
//     ],
//     "points" : [
//         [0, 0],
//         [100, 100],
//         [15, 10],
//         [18, 18],
//         [13, 13],
//         [25, 99]
//     ]
// }

app.use(express.json());

app.post('/calculate', function (req, res) {
      bodyRequest = req.body; 
      listResult = calcule.calculate(req.body.stations,req.body.points)
      res.setHeader('Content-Type', 'application/json');
      res.json(listResult);
})

var server = app.listen(PORT, function () {
   var host = "0.0.0.0"
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

