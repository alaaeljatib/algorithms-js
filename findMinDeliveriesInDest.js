const closestDeliveriesList = (allDestinations, numOfDeliveries) => {
    if (allDestinations.length < 2) return allDestinations;

    const costsArr = [];

    allDestinations.map((dest, index) => {
        [destX, destY] = dest;

        const destCost = Math.sqrt(destX * destX + destY * destY);
        costsArr.push([index, destCost]);
        console.log(costsArr);
    });

    costsArr.sort((a, b) => a[1] < b[1]);

    console.log(costsArr);

    const returnResult = [];


    for (let i = 0; i < numOfDeliveries; i++) {
        returnResult.push(allDestinations[costsArr[i][0]]);
    }

    return returnResult;
}

const dests = [
    [1, -1],
    [2, 3],
    [0, 1],
    [2, 2],
    [-2, -1]
];
const devs = 3;
console.log('answer is ', closestDeliveriesList(dests, devs));