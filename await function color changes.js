h1=document.querySelector("h1");

function  changeColor(color,delay){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         h1.style.color=color;
         resolve();
      },delay);
   });
}

async function  demo(){
   await changeColor("red",1000);
   console.log("red color was changed");
   await changeColor("orange",1000);
   console.log("orange color was changed");
   await changeColor("green",1000);
   console.log("green color was changed");
   await changeColor("yellow",1000);
   console.log("yellow color was changed");
   await changeColor("blue",1000);
   console.log("blue color was changed"); 
}
