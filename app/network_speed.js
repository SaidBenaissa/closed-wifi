

/* Distance between 2 points A and B: [(xA -xB) + (yA -yB)]^(1/2)
*  [xA, yA] = [A[0], A[1]] and [xB, yB] = [B[0], B[1]]
*/
const distance = (A, B) => {
    return Math.sqrt(Math.pow(Math.abs(A[0] - B[0]), 2) + Math.pow(Math.abs(A[1] - B[1]), 2));
};

/* This is the functionality loop that checks every point for each station and outputs the coordinates of the station
    with the best speed for every given point.A bestStation array variable is introduced as a placeholder for the station
    with the best speed and its elements represent z the speed of station and x,y the coordinates of the station [z,x,y] 
*/
const calculate = (stations,points)=>{
var listResult = [];
for (let i = 0; i < points.length; i++) {
    let bestStation = [0, 0, 0];
    for (let j = 0; j < stations.length; j++) {
        let speed = s(points[i], stations[j]);
        if (speed > bestStation[0]) {
            bestStation[0] = speed;
            bestStation[1] = stations[j][0];
            bestStation[2] = stations[j][1];
        }
    };

    if (bestStation[0] == 0) {
        var rl= "No station within reach found, output error message " + points[i][0] + "," + points[i][1];
        console.log(rl);
        listResult.push(rl);
    } else {
        var rl= "Best station found, output station location and speed " + points[i][0] + "," + points[i][1] + " is " + bestStation[1] + "," + bestStation[2] + " with speed " + bestStation[0];
        console.log(rl);
        listResult.push(rl);
    };
};
 return listResult;
}

/* This function calcutes the speed between a point and a station utilizing the given speed calculation formula
and the distance function we created above. */
const s = (point, station) => {
    const d = distance(point, station);
    if (d > station[2]) {
        return 0;
    } else {
        return Math.pow(Math.abs(station[2] - d), 2);
    }
};

module.exports = { calculate }



