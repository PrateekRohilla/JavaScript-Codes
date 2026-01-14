function insertionSort(arr){

    for(let i=0;i<arr.length;i++){
        let j=i;

        while(j>0 && arr[j-1] > arr[j]){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
            j--;
        }
    }

    return arr;
}


let arr = [5,8,5,7,2,8,9];
console.log(insertionSort(arr));