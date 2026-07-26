
function getMin(nums){
    let min=nums.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }

    });
    return min;
   }

   let nums=[10,20,30,40,60,70,80,90,100];