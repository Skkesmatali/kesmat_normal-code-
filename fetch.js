let url="https://catfact.ninja/fact";
fetch(url)
 .then((res)=>{
    
    return res.json();
})
 .then((data)=>{
    console.log("Data1: ", data.fact);
    return fetch(url);  // again return promise 

})
.then((res)=>{
    
    return res.json();
})  
.then((data2)=>{
    
   console.log("Data2: ", data2.fact);
})
.catch((err)=>{
    console.log(" ERROR - ",err);
});

