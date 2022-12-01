function PromiseMultipleReject() {
  return new Promise((_, reject) => {
    reject("Some Error occurred");
  });
}

// Print only Some Error occurred
PromiseMultipleReject()
  .catch((error1) => console.log(error1)) 
  .catch((error2) => console.log(error2)) 
  .catch((error3) => console.log(error3));

// if all are .then() s will give Error: UnhandledPromiseRejection
PromiseMultipleReject()
  .then((data1) => console.log(data1)) 
  .then((data2) => console.log(data2)) 
  .then((data3) => console.log(data3));  