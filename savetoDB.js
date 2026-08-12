function savetoDB(data,success,failure){
   let internetspeed = Math.floor(Math.random() * 10) + 1;
   if(internetspeed>4){
      success();
   } else {
      failure();
   }
}

   


  savetoDB(
   "hello world",
    () => {
   console.log("success: your data is saved:");
   savetoDB(
      "apna collage",
   () => {
      console.log("success2:  data2 is saved");
      savetoDB(
         "kesmat",
      () => {
         console.log("success3:  data3 is saved");
   },
    ()=> {
      console.log("failure3: weak connection");
   }
    );
   },
   () => {
      console.log("failure2: weak connection");
   }
   );
  }, 
() => {
   console.log("failure: data not saved");
}
);
    
