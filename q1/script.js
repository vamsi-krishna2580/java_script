const mdbtn=document.querySelector("button");
mdbtn.innerText="black";
let value=0;
const light = () => {
    if (value===0){
        document.querySelector("body").style.backgroundColor="black";
        mdbtn.innerText="white"
        value=1;
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
        mdbtn.innerText="black"
        value=0;
    }
}
mdbtn.addEventListener("click",light);