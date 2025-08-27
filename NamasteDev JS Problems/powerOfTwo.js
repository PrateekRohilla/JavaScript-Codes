//TC - log(n)
function powerOfTwo(n){

    if(n <= 0)
        return false;

    while(n%2 === 0)
        n = n/2;

    return n === 1;
}


let n = 256;

console.log(powerOfTwo(n));