//Basic solution | works only one level of nesting
function flatArr(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {

            for (let j = 0; j < arr[i].length; j++) {
                resultArr.push(arr[i][j]);
            }

        }
        else {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}


let arr = [1, [2, [3, 4], 5], 6];
let res = flatArr(arr);
console.log(res);

