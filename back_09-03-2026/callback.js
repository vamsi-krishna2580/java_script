// function getData (){
//     setTimeout(()=>{
//         console.log("data1"); // function that can be passed as parameter in another functions
//         setTimeout(()=>{
//             console.log("data2");   // synchronus
//             setTimeout(()=>{
//                 console.log("data3");
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }
// getData();

function getData (dataid, getnextData){
    setTimeout(()=>{
        console.log("data", dataid)
        if(getnextData != undefined){
            getnextData();
        }
    }, 2000)
}
getData(1, ()=>{
    getData(2);
});
