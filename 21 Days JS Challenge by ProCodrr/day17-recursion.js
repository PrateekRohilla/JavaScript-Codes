//head recursion
function print(n){

    if(n == 0)
        return;

    print(n-1);
    
    console.log(n);
}

//tail recursion
function print2(n){

    if(n == 0)
        return;
    
    console.log(n);

    print2(n-1);
}

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



console.log(sumNumbers(10));