function savetoDB(data){
   return new Promise((resolve,reject) => {
      let internetspeed = Math.floor(Math.random() * 10) + 1;
      if(internetspeed>4){
      resolve("success:data was saved");
   } else {
      reject("failure: weak connection");
   }
      
   });
}
  savetoDB("apna collage")
  .then((result)=>{
   console.log(" data1 saved");
   console.log("result of promise:", result);
   return savetoDB("apna collage2");
})
  .then((result)=>{
   console.log("data2 saved");
   console.log("result of promise:", result);
   return savetoDB("kesmat");
})
  .then((result)=>{
   console.log("data3 saved");
   console.log("result of promise:", result);
})
  .catch((error)=>{
   console.log("promise was rejected");
   console.log("error of promise:", error);
  });
