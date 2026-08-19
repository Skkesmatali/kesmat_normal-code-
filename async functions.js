async function greet(){
throw"401 page not found";
   return "hello";
}
  
greet()
.then((result)=>{
   console.log("promises was resolved");
   console.log("result of promise:", result);
})

.catch((err)=>{
   console.error("promies was rejected with error:", err);
});

let demo =async()=>{

   return "5";
}
