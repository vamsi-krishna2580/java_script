const BASE_URL = "https://api.frankfurter.app/latest?amount=1";
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
const dropdowns = document.querySelectorAll(".dropdown select");


for(let select of dropdowns){
    for (currcode in countryList){
        let new_option = document.createElement("option");
        new_option.value = currcode;
        new_option.innerText = currcode;
        select.append(new_option);
    }
}

const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");


btn.addEventListener("click" , async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amtval = amount.value;
    const URL = `${BASE_URL}&from=${fromcurr.value}&to=${tocurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    msg.innerText = `${amtval} ${fromcurr.value} = ${amtval*data.rates[tocurr.value]} ${tocurr.value}`;
    

});