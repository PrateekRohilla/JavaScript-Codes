//find min & max
function minMax(arr){

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i=0;i<arr.length;i++){
        if(arr[i] < min)
            min = arr[i];
        else if(arr[i] > max)
            max = arr[i];
    }
    
    return [min,max];
}


//reverse array
function revArr(arr){

    let s = 0;
    let e = arr.length-1;

    while(s<e){
        
        //swapping JS way - using destructuring
        [arr[s],arr[e]] = [arr[e],arr[s]];

        s++,e--;
    }

    return arr;
}





let arr = [3,7,1,5,2];

//console.log(minMax(arr));
//console.log(revArr(arr));
