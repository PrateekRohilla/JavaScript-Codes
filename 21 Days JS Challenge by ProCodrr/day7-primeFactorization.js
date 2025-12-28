//prime factorization
/* 
let n = 84;
let factors = [];

function checkPrime(num){
    for(let i=num-1;i>1;i--)
        if(num%i == 0)
            return false;
    
    return true;
}

function primeFactors(n){

    for(let i=2;i<=n;i++){
        if(n%i == 0){
            if(checkPrime(i)){
                factors.push(i);
                n = Math.floor(n/i);
                while(n%i == 0){
                    factors.push(i);
                    n = Math.floor(n/i);
                }
            }
        }
            
    }

    return factors;
}

console.log(primeFactors(1261));
 */


//swap without third variable
/* 
let a = 10, b = 20;
a = a+b;
b = a-b;
a = a-b;
console.log(a, b);
 */


