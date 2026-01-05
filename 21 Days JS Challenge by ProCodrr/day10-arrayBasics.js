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


//second largest
function secondLarge(arr){

    let max = -1;
    let secondMax = -1

    for(let i=0;i<arr.length;i++){
        if(arr[i] > max)
            max = arr[i]

        if(arr[i] < max && arr[i] > secondMax)
            secondMax = arr[i];
    }

    return secondMax;
}


//check if two arrays are equal
function checkEqual(arr,arr2){

    if(arr.length !== arr2.length)
        return 'not equal';

    for(let i=0;i<arr.length;i++)
        if(arr[i] !== arr2[i])
            return 'not equal';

    return 'equal';
}


//count even & odd numbers
function evenOdd(arr){

    let even = 0;
    let odd = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0)
            even++;
        else
            odd++;
    }

    return [even,odd];
}


//check if array is sorted
function isSorted(arr){

    for(let i=0;i<arr.length-1;i++)
        if(arr[i+1] < arr[i])
            return false;
    

    return true;
}


//remove duplicates from array
function removeDuplicate(arr){
    
    let i=0;

    for(let j=1;j<arr.length;j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}


//merge two arrays
function merge(arr,arr2){

    let merged = [];

    let i = j = k = 0;
    
    while(i<arr.length && j<arr2.length){
        if(arr[i] < arr2[j]){
            merged[k] = arr[i];
            i++
        }
        else{
            merged[k] = arr2[j];
            j++
        }
        k++;
    }

    while(i<arr.length){
        merged[k] = arr[i]
        i++,k++;
    }

    while(j<arr2.length){
        merged[k] = arr2[j];
        j++,k++;
    }

    return merged;
}


//rotate array to right by K steps
function rotateRight(arr,k){

    let lastIndex = arr.length;

    while(k--){

        let last = arr[lastIndex-1];

        for(let i=lastIndex-2;i>=0;i--){
            arr[i+1] = arr[i];
        }

        arr[0] = last;
    }

    return arr;
}


//find unique pairs whose sum equals to target (arr is sorted)
function uniquePairs(arr,target){

    let s = 0, e = arr.length-1

    while(s<e){

        if(arr[s]+arr[e] == target){
            console.log(arr[s],arr[e]);
            s++,e--;
        }

        else if(arr[s]+arr[e] < target)
            s++

        else
            e--;

    }

}


//left shift array by one position
function leftShift(arr){

    let first = arr[0];
    
    for(let i=1;i<arr.length;i++)
        arr[i-1] = arr[i];

    arr[arr.length-1] = first;

    return arr;
}


//count frequency of a element
function countFrequency(arr, elem){

    let count = 0;

    for(let i=0;i<arr.length;i++)
        if(arr[i] == elem)
            count++;

    return count;
}







let arr = [3,7,1,5,2];
let arr2 = [1,5,2,7,3];
let arr3 = [3,7,1,5,2];
let arr4 = [2,5,8,8,90,100];
let arr5 = [1,1,1,1,1,2,2,3,4,4,5,6];
let A = [2,4,6,8];
let B = [1,3,5,6,7,9,10];
let C = [1,2,3,4,5];


//console.log(minMax(arr));
//console.log(revArr(arr));
//console.log(secondLarge(arr));
//console.log(checkEqual(arr,arr3));
//console.log(evenOdd(arr));
//console.log(isSorted(arr4));
//console.log(removeDuplicate(arr5));
//console.log(arr5);
//console.log(merge(A,B));
//console.log(rotateRight(arr,3));
//console.log(uniquePairs(C,6));
//console.log(leftShift(arr4));
//console.log(countFrequency(arr5,4));