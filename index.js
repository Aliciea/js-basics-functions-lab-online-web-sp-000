// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    // return distance = 8;
    if (distance > 42){
        return distance - 42;
    } else if (distance > 50) {
        return 50 - distance;
    } else if (distance > 26) {
        return distance - 26;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
    
}

function distanceTravelledInFeet(travel, distance) {
    if (travel < distance) {
        return (distance - travel) * 264;
    } else {
        return (travel - distance) * 264;
    }
    
}

function calculatesFarePrice(travel, distance) {
    const calculate = distanceTravelledInFeet(travel, distance);

    if (calculate <= 400) {
        return 0;
    } else if (calculate > 400 && calculate < 2000) {
        return 2.56;
    } else if (calculate > 2000 && calculate < 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}
