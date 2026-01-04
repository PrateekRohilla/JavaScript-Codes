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





let arr = [3,7,1,5,2];
let arr2 = [1,5,2,7,3];
let arr3 = [3,7,1,5,2];

//console.log(minMax(arr));
//console.log(revArr(arr));
//console.log(secondLarge(arr));
//console.log(checkEqual(arr,arr3));
//console.log(evenOdd(arr));
