const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Provided Code

function totalBatteries(batteryBatches, num){
    return batteryBatches.reduce(x => x.sum)
}