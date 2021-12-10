const { arrayContaining } = require("expect");

const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Provided Code

function reducer(arr, num){
    return arr.reduce(x => x + arr)
}