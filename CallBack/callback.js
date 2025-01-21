function asyncFunction(myfunction){
    setTimeout(()=>{
        const randomnum= Math.random();
        console.log(randomnum);
        if(randomnum>0.5){
            myfunction(null, "Task Completed Succesfully");
        }
        else{
            myfunction('Task Failed',null);
        }
    },5000)
}

asyncFunction((error, result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
})