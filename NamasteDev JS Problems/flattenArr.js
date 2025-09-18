/*
Problem - Flatten an Array
I/P - ["a", "b", "b", ["a", "b", "c"], 1, 2, 3, [4], ["5", 6], "7", "d"]
O/P - ['a', 'b', 'b', 'a', 'b', 'c', 1,   2,   3,   4, '5', 6,'7', 'd']
*/

let arr = [1, [2, [3, 4], 5], 6];


//works upto 1 level of nesting
let inbuiltSol = arr.flat();

//Basic solution | works only one level of nesting
function flatArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {

            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }

        }
        else {
            result.push(arr[i]);
        }
    }

    return result;
}

//recursive - will work for multiple nested array
function flatArrRec(arr, result = []) {

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i]))
            flatArrRec(arr[i], result);

        else
            result.push(arr[i]);
    }

    return result;
}

//works for deep nestings
//also changes sources array & changes elements order
function flatOptimised(arr){

  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    
    if (Array.isArray(arr[i])) {
      arr.push(...arr[i]);
    } 
    else {
      result.push(arr[i]);
    }
  }
  return result;

}





let basicSol = flatArr(arr);
let recursiveSol = flatArrRec(arr);
let flat = flatOptimised(arr);
console.log(flat);

