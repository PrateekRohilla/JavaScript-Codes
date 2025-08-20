function largeNumberForm(arr){

    const nums = arr.map((num) => num.toString());

    //sort using custom comparator
    nums.sort((a,b) =>{
        return (b+a).localeCompare(a+b);
    });

    //if all nums are 0
    if(nums[0] === '0')
        return '0';

    return nums.join('');

}


let arr = [3,30,34,5,9];

let result = largeNumberForm(arr);
console.log(result);