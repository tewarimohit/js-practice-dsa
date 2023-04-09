// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const rand = Math.random();
//         if (rand < 0.5) {
//           resolve();
//         } else {
//           reject();
//         }
//       }, 5000);
//     });
//   };

//   getPromise()
//     .then(() => {
//       console.log("Yey promise is resolved!!");
//     })
//     .catch(() => {
//       console.log("Dhokha hua h :(");
//     });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/user": [
          { id: 1, username: "Bilbo" },
          { id: 2, username: "Laura" },
        ],
        "/about": "Here is about page",
      };
      const status = "200 OK";
      const data = pages[url];
      if (data) {
        resolve({ status, data });
      } else {
        reject({ status: "500 Server Fucked up!!" });
      }
    }, 3000);
  });
};

fakeRequest("/dogs")
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
  })
  .catch((res) => {
    console.log(res.status);
  });

fakeRequest("/user")
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
  })
  .catch((res) => {
    console.log(res.status);
  });

//   nesting .then syntax

//   fakeRequest("/user")
//   .then((res)=>{
// console.log(res);
// return fakeRequest(`/user/${id}`)
//   }).then().catch(works for all)
