const obj = new Promise((resolve, reject) => {
  let resolution = true;
  if (resolution) {
    resolve({id:1,name:"yrd"});
  } else {
    reject("bye");
  }
});
// obj
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((errMessage) => {
//     console.log("error:", errMessage);
//   });

const get = async () => {
  const result = await obj;
  console.log("hey",result);
  console.log(result);
};
