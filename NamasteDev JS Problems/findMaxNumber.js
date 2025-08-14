function findMax(arr){
    if(arr.length == 0)
        return null;

    let max = arr[0];

    for(let i=1;i<arr.length-1;i++)
        if(arr[i] > max)
            max = arr[i];

    return max;
}

let A = [7,0,52,85,3,8,32,70];
console.log(findMax(A));