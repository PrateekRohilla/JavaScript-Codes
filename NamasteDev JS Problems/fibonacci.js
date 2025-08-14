function fibSeries(n){
    
    let fibArr = [0,1];

    if(n<2)
        return fibArr;

    for(let i=2;i<n;i++){
        let k = fibArr[i-1]+fibArr[i-2];
        fibArr.push(k);
    }
    
    return fibArr;
}

console.log(fibSeries(6));