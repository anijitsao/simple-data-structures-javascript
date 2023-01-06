/**
  This example shows some of the Promise Concurrency method
 */
const p1 = Promise.reject("Promise Rejected");
const p2 = new Promise((resolve, _) =>
  setTimeout(() => {
    resolve("Resolves after 1 sec");
  }, 1000)
);

const p3 = new Promise((resolve, _) => {
  resolve("Resolves immediately");
});

// Promise.all resolve when all the promises resolve, otherwise it gives error
// Output: *** Promise.any **** Error occurred:  Promise Rejected
Promise.all([p1, p2, p3])
  .then((res) => console.log("*** Promise.any **** Result is: ", res))
  .catch((err) => console.log("*** Promise.any **** Error occurred: ", err));

// Promise.any resolve when any the promises resolves
// Output: Result is:  Resolves immediately
Promise.any([p1, p2, p3])
  .then((res) => console.log("Result is: ", res))
  .catch((err) => console.log("Error occurred", err));
