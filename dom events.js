let btns=document.querySelectorAll("button");

for(btn of btns){
    btn.onclick=sayhello;
    btn.onmouseenter=function(){
    console.log("you entered a button");
   };
   console.dir(btn);
}

function sayhello(){
    alert("hello!");
}
    
