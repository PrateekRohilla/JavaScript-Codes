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

function printArr(A, index = 0){
    if(index >= A.length)
        return;

    console.log(A[index]);
    index++;

    printArr(A, index);
}

//NtimesRec(5);
//NtimesRec2(5);

//let res = factorial(6);

//let res = fib(7);
//console.log(res);

let arr = [1,4,7,12,24];
printArr(arr);

