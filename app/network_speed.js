

/* Distance between 2 points A and B: [(xA -xB) + (yA -yB)]^(1/2)
*  [xA, yA] = [A[0], A[1]] and [xB, yB] = [B[0], B[1]]
*/
let distance = (A, B) => {
    return Math.sqrt(Math.pow(Math.abs(A[0] - B[0]), 2) + Math.pow(Math.abs(A[1] - B[1]), 2));
};

/* This is the functionality loop that checks every point for each station and outputs the coordinates of the station
    with the best speed for every given point.A bestStation array letiable is introduced as a placeholder for the station
    with the best speed and its elements represent z the speed of station and x,y the coordinates of the station [z,x,y] 
*/
let calculate = (stations,points)=>{
let listResult = [];
for (const element of points) {
    let bestStation = [0, 0, 0];
    for (let j = 0; j < stations.length; j++) {
        let speed = speedcal(element, stations[j]);
        if (speed > bestStation[0]) {
            bestStation[0] = speed;
            bestStation[1] = stations[j][0];
            bestStation[2] = stations[j][1];
        }
        console.log(points, bestStation)
    }

    if (bestStation[0] == 0) {
        let rl= "No station within reach found, output error message " + element[0] + "," + element[1];
        console.log(rl);
        listResult.push(rl);
    } else {
        let rl= "Best station found, output station location and speed " + element[0] + "," + element[1] + " is " + bestStation[1] + "," + bestStation[2] + " with speed " + bestStation[0];
        console.log(rl);
        listResult.push(rl);
    }
}
 return listResult;
}

/* This function calcutes the speed between a point and a station utilizing the given speed calculation formula
and the distance function we created above. */
let speedcal = (point, station) => {
    let d = distance(point, station);
    if (d > station[2]) {
        return 0;
    } else {
        return Math.pow(Math.abs(station[2] - d), 2);
    }
};

module.exports = { calculate }



