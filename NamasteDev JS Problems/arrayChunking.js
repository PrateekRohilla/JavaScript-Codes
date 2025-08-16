let arr = [1, 2, 3, 4, 5];
let n = 2;

function chunkArray(arr, n) {
    let result = [];

    if (arr.length == 0)
        return result;

    let index = 0

    while (index < arr.length) {
        let tempArr = [];

        for (let i = 1; i <= n; i++) {
            tempArr.push(arr[index]);
            index++;

            if (index >= arr.length)
                break;
        }

        result.push(tempArr);
    }

    return result;
}

//optimal
function chunkedOP(arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i += n)
        result.push(arr.slice(i, i + n));

    return result;
}

let resultArr = chunkedOP(arr, n);
console.log(resultArr);