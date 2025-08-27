//TC - log(n)
/*
function powerOfTwo(n){

    if(n <= 0)
        return false;

    while(n%2 === 0)
        n = n/2;

    return n === 1;
}
*/


//optimal - using bit manipulation | TC - O(1)
function powerOfTwo(n){

    if(n <= 0)
        return false;

    let flag = false;

    while(n != 0){
        
        if(flag)
            return false;
        if(n&1)
            flag = true;

        n = n>>1;
    }

    return true;
}

let n = 256;

console.log(powerOfTwo(n));