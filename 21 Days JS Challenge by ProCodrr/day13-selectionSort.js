function selectionSort(arr){

    for(let i=0;i<arr.length-1;i++){

        let min = i;

        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[min])
                min = j;
        }

        [arr[i],arr[min]] = [arr[min],arr[i]];
    }

    return arr;
}


let arr = [5,8,5,7,2,8,9];
console.log(selectionSort(arr));