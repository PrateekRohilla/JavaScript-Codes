//check prime
/* 
function isPrime(num){
    for(let i=num-1;i>1;i--)
        if(num%i == 0)
            return 'not prime';
        
    return 'prime';
}
 */


//check co-prime
/* 
function coPrime(a,b){

    for(let i = (a<b?a:b); i>1;i--)
        if(a%i == 0 && b%i == 0)
            return 'not co-prime';

    return 'co-prime';
}
 */


//finonacci series
/* 
function fib(n){
    let first = 0, second = 1;
    let third;

    console.log(first, second);

    for(let i=3;i<=n;i++){
        third = first + second;
        console.log(third);
        first = second;
        second = third;
    }
}
 */



let n = 10;
let num = 7;
let a = 14, b = 9;

console.log(fib(n));