// Code your solution in this file!
function distanceFromHqInBlocks(num1) {
    return Math.abs(num1 - 42);
}

function distanceFromHqInFeet(num2) {
    distanceFromHqInBlocks(num2);
    return distanceFromHqInBlocks(num2) * 264;
    
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264);

}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    } 
}