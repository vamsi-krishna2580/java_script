function data_call(data,nextcall){
   
  setTimeout(() => {
    console.log("data",data);
     if(nextcall){
        nextcall();
    }
  }, 2000);                    

 
}
function call_data(){
data_call(1,()=>{
    data_call(2,()=>{
        data_call(3);                    // callbacks
    });
});
}


//promises

function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
        },2000);
    });
}

function data_get(){
getdata(1).then(()=>{
    return getdata(2);
}).then(()=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})
}


function call (res){
    setTimeout(()=>{
        console.log(res);        // will not work as async and await
    },3000);
}
function hello(){
    call(1);
    call(2);
}


//ASYNC - AWAIT

function fecth_data(data){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",data);
        resolve("success");
        },2000);
    });
}

async function fecth() {
   await fecth_data(1);
   await fecth_data(2);    
   await fecth_data(3);    
   await fecth_data(4);        

}