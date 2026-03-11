const URL = "https://api.frankfurter.app/latest?amount=1&from=USD&to=INR";

async function call (params) {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.rates.INR);
}
