// function asyncFunction(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 const randomnum= Math.random();
//                 console.log(randomnum);
//                 if(randomnum>0.5){
//                     resolve('Task Success')
//                 }
//                 else{
//                     reject(new Error('Task Failed'));
//                 }
//             },5000)
//     })
// }

// asyncFunction()
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })

    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("Data fetched from server");
          }, 2000);
        });
      }
      
      fetchData()
        .then((message) => {
          console.log("yeta ako")
          console.log(message);
          return "Processing data...";
        })
        .catch((error) => {
          console.log("here")
          console.error("Error:", error);
        });