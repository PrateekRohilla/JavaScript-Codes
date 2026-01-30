//head recursion
function print(n){

    if(n == 0)
        return;

    print(n-1);
    
    console.log(n);
}
// O/P -> 1 2 3 4 5

//tail recursion
function print2(n){

    if(n == 0)
        return;
    
    console.log(n);

    print2(n-1);
}
// O/P -> 5 4 3 2 1

function factorial(n){

    if(n == 0)
        return 1;

    return n * factorial(n-1);
}

function sumNumbers(n,sum=0){

    if(n == 0)
        return sum;

    sum += n;

    return sumNumbers(n-1,sum);
}

function reverseRecursion(n,rev=0){

    if(n == 0)
        return rev;

    rev *= 10;
    rev += n%10;
    n = Math.floor(n/10)

    return reverseRecursion(n,rev);
}

function palindrome(n){

    let rev = reverseRecursion(n);

    if(n == rev)
        return true;

    return false;
}


//console.log(sumNumbers(10));
console.log(print2(5));