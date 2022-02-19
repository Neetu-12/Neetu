let complete=false;
let prom=new Promise(function(resolve,reject){
    if(complete){
        resolve("I am successfull");
    }
    else{
        reject("she is not pass")
    }
})
console.log(prom);