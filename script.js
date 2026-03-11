let marks=[96,95,94];
let info=["rahul","hvjhn","delhi"];
console.log(marks.length);
console.log(typeof(info));
marks[3]=45; // we cant do this in strings str[2]='i';
marks[4]=65; 
console.log(marks);

// LOOPING
for(let i=0;i<info.length;i++){
    console.log(info[i]);
}

// for of

for(let el of info){  // for val in arr -> python
    console.log(el.toUpperCase());
}

let sum=0;
let mark=[85,97,44,37,76,60];
for (let i=0;i<mark.length;i++){
 sum+=mark[i];
}
console.log(sum/mark.length);

// practice q1
let prices=[250,645,300,900,50];
for(let i=0;i<prices.length;i++){
    prices[i]-=prices[i]*0.1;
}
console.log(prices);

prices.push(7896);
console.log(prices); // add at end
let poped_item=prices.pop(); // deletes at end
console.log(poped_item);
console.log(prices);

// convert array to string

console.log(prices.toString());// doest change in array returns new array

