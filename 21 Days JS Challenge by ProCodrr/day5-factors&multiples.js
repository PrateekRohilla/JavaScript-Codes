//all factors of a number
/* let num = 18;
for(let i=1;i<=num;i++)
    if(num%i == 0)
        console.log(i);
 */


//HFC or GCD
/* 
let a = 12, b = 18;
for(let i=(a<b?a:b); i>=1; i--){
    if(a%i == 0 && b%i == 0){
        console.log(i)
        break;
    }
}
 */


//LCM

let a = 12, b = 18;
for(let i = (a>b?a:b); i<=(a*b);i += (a>b?a:b)){
    if(i%a == 0 && i%b == 0){
        console.log(i);
        break;
    }
}