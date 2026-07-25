let id=setInterval(()=>{
    console.log("hello world");
 },2000);


 setInterval(()=>{
    clearInterval(id);
    console.log("clear ran");
 },10000);