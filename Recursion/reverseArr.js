function reverseArr(A, left = 0){
    let right = A.length - 1 - left;
    
    if(left >= right)
        return;

    // let t = A[left];
    // A[left] = A[right]
    // A[right] = t;

    //swap using destructuring
    [A[left], A[right]] = [A[right], A[left]];

    reverseArr(A, left+1);
}

let arr = [1,2,3,4,5];

reverseArr(arr);
console.log(arr);