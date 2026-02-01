function printArr(arr, index = 0){

    if(index >= arr.length)
        return;


    console.log(arr[index]);
    index++;

    return printArr(arr, index);
}

function sumArr(arr, index = 0, sum = 0){

    if(index >= arr.length)
        return sum;

    sum += arr[index];
    index++;

    return sumArr(arr, index, sum);
}

function isSorted(arr, index = 0){

    if(index >= arr.length-1)
        return true;

    if(arr[index] > arr[index+1])
        return false;

    index++;

    return isSorted(arr, index);
}

//Check if All Elements in Array Are Even
function allEven(arr, index = 0){

    if(index >= arr.length)
        return true;

    if(arr[0]%2 !== 0)
        return false;

    index++;
    return allEven(arr,index);
}

//find max in array
function findMax(arr, index = 0, max = -1){

    if(index >= arr.length)
        return max;

    if(arr[index] > max)
        max = arr[index];

    index++;
    return findMax(arr, index, max)
}

//count number fo vowels in str
function vowelsCount(str, index = 0, count = 0){

    if(index >= str.length)
        return count;

    if('aeiou'.includes(str[index]))
        count++;

    return vowelsCount(str, index + 1, count);
}




let str = 'education';
let arr = [1,2,4,5,5,7];
let arr2 = [2,4,6,8,10];
//console.log(isSorted(arr));
//console.log(findMax(arr2));
console.log(vowelsCount(str));

