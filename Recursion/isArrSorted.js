function isSorted(A, index = 0) {
    if (index >= A.length - 1)
        return true;

    if (A[index] > A[index + 1])
        return false;

    return isSorted(A, index + 1);
}

let arr = [2, 5, 7, 9, 12, 34];

let res = isSorted(arr)
console.log(res);