let arr = ['g', 3, 4, 'h', 5, 'j', 'g', 2, 3, 'X', 'N', 0, 'S', 'H', 'A', 'S', 'D', 5, 'h', 'j', 23, 'h', 'j'];

function customSort(arr) {

    let sorted = [];

    if (arr.length <= 1) {
        sorted[0] = arr[0];
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