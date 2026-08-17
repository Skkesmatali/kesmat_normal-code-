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
  .then(()=>{
   console.log(" data1 saved");
   savetoDB("kesmat").then(()=>{
      console.log("data2 saved");
  });
})

  .catch(()=>{
   console.log("promise was rejected");
  });
