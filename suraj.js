const sum=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log("hello result");
        reject("hello pgl")
        
    }, 10000);

})
sum.then((a)=>{console.log(a,"Result");console.log(a,"result-2");})
.catch(arr=>console.log(arr,"result are"))
console.log("hello-2");
