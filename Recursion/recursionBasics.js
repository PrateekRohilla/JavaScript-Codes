//tail recursion
function NtimesRec(n){
    if(n == 0)
        return;

    console.log(n);

    NtimesRec(n-1);
}

//head recursion
function NtimesRec2(n){
    if(n == 0)
        return;

    NtimesRec2(n-1);

    console.log(n);
}

function factorial(n){
    if(n == 1)
        return 1;

    return n*factorial(n-1);
}

function fib(n){
    if(n <= 1)
        return n;

    return fib(n-1) + fib(n-2);
}


//NtimesRec(5);
//NtimesRec2(5);

//let res = factorial(6);

//let res = fib(7);
//console.log(res);


