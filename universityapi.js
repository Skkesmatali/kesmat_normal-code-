let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
   let country=document.querySelector("input").value;
   
   console.log(country);

   let colArr=await getColleges(country);
   show(colArr);
});

function show(colArr){
   let list=document.querySelector("#countryList");
   list.innerText="";  
   for(col of colArr){
      console.log(col.name);
   


let li=document.createElement("li");
li.innerText=col.name;
list.appendChild(li);

      console.log(col.name);
   }
}
async function getColleges(country){
   try{
      let res=await axios.get(url+country);
      return res.data;
   }catch(error){
      console.error("error caught",error);
   }  
}
