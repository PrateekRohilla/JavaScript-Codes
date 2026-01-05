//find missing number from range 0 to N
function missingNUmber(arr){

    //sum of natural numbers

    let N = arr.length+1;
    let sum = (N*(N+1))/2;

    //sum of arr elements
    let arrSum = 0
    for(let i=0;i<arr.length;i++)
        arrSum += arr[i];

    return sum - arrSum;
}



let arr = [1,5,2,4];
console.log(missingNUmber(arr));