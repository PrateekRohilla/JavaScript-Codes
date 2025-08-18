let arr = ['g', 3, 4, 'h', 5, 'j', 'g', 2, 3, 'X', 'N', 0, 'S', 'H', 'A', 'S', 'D', 5, 'h', 'j', 23, 'h', 'j'];
//let arr = ['d','f','k','K','A','S','J','A','g'];
//let arr = [4,3,6,8,6,7,8,1,2,0];
//let arr = [1,'s'];
//let arr = [2];
//let arr = [];


function customSort(arr) {

    let sorted = [];

    if (arr.length <= 1) {
        sorted = [...arr];
        return sorted;
    }

    let chars = [];
    let nums = [];

    for (let item of arr) {
        if (typeof item === 'string')
            chars.push(item);
        else
            nums.push(item);
    }

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars.length - i - 1; j++)
            if (chars[j] > chars[j + 1])
                [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++)
            if (nums[j] > nums[j + 1])
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }

    return sorted = [...chars, ...nums];
}

let sortedArr = customSort(arr);
console.log(sortedArr);