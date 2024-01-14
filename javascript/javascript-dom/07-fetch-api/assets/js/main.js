const obj = new Promise((resolve, reject) => {
  let resolution = false;
  if (resolution) {
    resolve("hai");
  } else {
    reject("bye");
  }
});
obj
  .then((message) => {
    console.log(message);
  })
  .catch((errMessage) => {
    console.log("error:", errMessage);
  });
