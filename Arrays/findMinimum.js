// the following code find minimum of an array
// using Typescript
function findMinimum(arrReceived) {
    let minIndex = 0;
    for (let i = 0; i < arrReceived.length; i++) {
        if (arrReceived[minIndex] > arrReceived[i]) {
            minIndex = i;
        }
    }
    return arrReceived[minIndex];
}
console.log("Minimum: ", findMinimum([110, 2, 34, 22, 4]));
