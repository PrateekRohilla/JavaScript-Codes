//brute solution
function removeDuplicates(arr){

    if(arr.length == 0)
        return [];

    let result = [];

    if(arr.length == 1){
        result.push(arr[0]);
        return result;
    }

    for(let i=0;i<arr.length-1;i++){
        
        if(arr[i] === -1)
            continue;

        result.push(arr[i]);

        for(let j=i+1;j<arr.length-1;j++){
            if(arr[i] === arr[j])
                arr[j] = -1;
        }
    }

    return result;
}

//let A = [1,"1",1];
let A = [1, 23, null, 4, 5, undefined, 12, 1, null, 23, undefined];
let res = removeDuplicates(A)
console.log(res);