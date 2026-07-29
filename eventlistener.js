let btns=document.querySelectorAll("button");

for(btn of btns){
btn.addEventListener("click",sayhello);   
btn.addEventListener("click",sayname);
btn.addEventListener("dblclick",function(){


    console.log("you double clicked me!");
});
}

function sayhello(){ 
    alert("hello!");
}
  

function sayname(){
    alert("kesmat!");
}
  