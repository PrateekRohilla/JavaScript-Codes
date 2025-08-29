//TC - nlogn
/*
function findMissing(arr){

    arr.sort();
    
    if(arr[0] != 0)
        return 0;

    for(let i=0;i<arr.length-2;i++)
        if((arr[i]+1) != arr[i+1])
            return (arr[i]+1)

    let last = arr[arr.length-1];
    return arr[last]+1;
}
*/

//TC - O(n)
function findMissing(arr) {

    let n = arr.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}



let arr = [6, 0, 8, 7, 5, 4, 3, 2, 1];
console.log(findMissing(arr));