//split nums into digits & return into arr

/* 
let n = 12345;
let res = [];
while (n > 0) {
    let t = n % 10;
    res.push(t)
    n = Math.floor(n / 10)
}
res.reverse();
console.log(res);
 */

//remove decimal point
/* let n = 12.34
let whole = Math.floor(n);
//to handle js floating point overflow behaviour
let fraction = Number((n-whole).toFixed(10));
console.log(whole,' & ', fraction); */


//Q - count whole & fractional digits separately
/* let n = 12345.12
//1. separate whole & fractional part
let whole = Math.floor(n);
let fraction = n - whole;
//2. count whole part digits
let count = 0;
while(whole > 0){
    count++;
    whole = Math.floor(whole/10);
}
//3. count digit in fraction
let fractionCount = 0;
while(fraction%1 !== 0){
    fraction = Number(fraction * 10).toFixed(10);
    fractionCount++;
}

console.log(count, ' & ', fractionCount); */


//Q - generate decimal number from whole & fractional digits
//Input: Whole = [1, 2], Fraction = [3, 4]
//Output: 12.34

/* let whole = [1, 2]
let fraction = [3, 4]

let wholeNum = 0;
wholeNum = whole[0];
for(let i=1;i<whole.length;i++){
    wholeNum *=10;
    wholeNum += whole[i];
}
console.log(wholeNum);

let fractionCount = 0;
let fractionNum = 0;
fractionNum = fraction[0];
fractionCount = 1;
for(let i=1;i<fraction.length;i++){
    fractionCount++;
    fractionNum *= 10;
    fractionNum += fraction[i];
}

console.log(fractionCount, fractionNum);

let t = 1;
while(fractionCount){
    fractionCount--;
    t *= 10;
}
let fractionPart = fractionNum/t;
console.log(fractionPart);

let mainNuber = wholeNum + fractionPart;
console.log(mainNuber); */