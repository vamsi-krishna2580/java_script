// "https://api.open-meteo.com/v1/forecast?latitude=13.08784&longitude=80.27847&current_weather=true";
const BASE_URL = "https://api.open-meteo.com/v1/forecast?";
const select = document.querySelector("select");
const btn = document.querySelector("button");
const cities = Object.keys(teluguCities);
const latitude = document.querySelector(".latitude input");
const longitude = document.querySelector(".longitude input");
for(let city of cities){
    let newOption = document.createElement("option");
    newOption.value = city;
    newOption.innerText = city;
    select.append(newOption);
    // console.log(city);
}
const msg = document.querySelector(".msg");
const selects = document.querySelector("select");
btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let city = selects.value;
    if (city !== ""){
    const URL = `${BASE_URL}latitude=${teluguCities[city].latitude}&longitude=${teluguCities[city].longitude}&current_weather=true`;
    let response = await fetch(URL);
    let data = await response.json();
    let temp = data.current_weather.temperature;
    console.log(data);
    msg.innerText = `Temperatue : ${temp}`;
    }
    else{
    const URL = `${BASE_URL}latitude=${latitude.value}&longitude=${longitude.value}&current_weather=true`;
    let response = await fetch(URL);
    let data = await response.json();
    let temp = data.current_weather.temperature;
    // console.log(latitude.value);
    msg.innerText = `Temperatue : ${temp}`;
    console.log(data);
    }
    // console.log(teluguCities[city].latitude);
});