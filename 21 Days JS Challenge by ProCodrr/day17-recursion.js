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





console.log(print2(5));