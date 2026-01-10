function bubbleSort(arr){

    for(let i=arr.length-1;i>=0;i--){

        let didSwap = 0;
        
        for(let j=0;j<i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                didSwap = 1;
            }
        }

        if(didSwap == 0)
            break;
    }

    return arr;
}


let arr = [5,8,5,7,2,8,9];
let arr2 = [2,1];
let arr3 = [3,1,2];
console.log(bubbleSort(arr));