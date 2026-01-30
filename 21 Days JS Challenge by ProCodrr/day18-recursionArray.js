function printArr(arr, index = 0){

    if(index >= arr.length)
        return;


    console.log(arr[index]);
    index++;

    return printArr(arr, index);
}



let arr = [1,2,3,4,5];
console.log(printArr(arr));