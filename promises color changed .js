h1=document.querySelector("h1");

function  changeColor(color,delay){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         h1.style.color=color;
         resolve();
      },delay);
   });
}

changeColor("red",1000).then(()=>{
   console.log("red color was changed");
   return changeColor("orange",1000);
}).then(()=>{
   console.log("orange color was changed");
   return changeColor("green",1000);
}).then(()=>{
   console.log("green color was changed");
   return changeColor("yellow",1000);
}).then(()=>{
   console.log("yellow color was changed");
   return changeColor("blue",1000);
}).catch((error)=>{
   console.error("An error occurred:", error);
});
