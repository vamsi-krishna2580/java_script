let promise = new Promise((resolve, reject)=>{
    console.log("I'm a promise");
    resolve("Success");
});
let promise1 = new Promise((resolve, reject)=>{
    console.log("I'm a promise");
    reject("My error");
});

let getPromise = (i)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(i);
            resolve("sucess");
        }, 1000);
    })
};

getPromise(1).then((res)=>{
    getPromise(2).then((res)=>{
        getPromise(3).then(()=>{
            console.log("Execution done");
        })
    })
})
