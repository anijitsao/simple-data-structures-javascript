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
// Output: *** Promise.all **** Error occurred:  Promise Rejected
Promise.all([p1, p2, p3])
  .then((res) => console.log("*** Promise.ALL **** Result is: ", res))
  .catch((err) => console.log("*** Promise.ALL **** Error occurred: ", err));

// Promise.any resolve as soon as any the promises resolves
// Output: *** Promise.AnY *** :  Resolves immediately
Promise.any([p1, p2, p3])
  .then((res) => console.log("*** Promise.AnY ***: ", res))
  .catch((err) => console.log("*** Promise.AnY ***", err));

/* 
  2. Promise with multiple Reject statements
*/
function PromiseMultipleReject() {
  console.log("Testing Promise with Multiple Rejects");
  return new Promise((_, reject) => {
    reject("Some Error occurred");
  });
}

// Print only Some Error occurred
PromiseMultipleReject()
  .catch((error1) => console.log(error1))
  .catch((error2) => console.log(error2));

// if all are .then() s will give Error: UnhandledPromiseRejection
PromiseMultipleReject()
  .then((data1) => console.log(data1))
  .then((data2) => console.log(data2));
