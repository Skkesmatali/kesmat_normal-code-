const url="https://api.chucknorris.io/jokes/random";

async function getJoke(){
   try{
      const config={
         headers:{
            Accept:"application/json"}}; 
            let res=await axios.get(url,config);
            console.log(res.data);
   }catch(error){
      console.error("error caught",error);
   }        
   
}
