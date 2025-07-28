function countDigits(num){
    
    let count = 0;
    
    while(num){
        count++;
        num = Math.floor(num/10);
    }
    return count
}

let res = countDigits(7468);
console.log(res);