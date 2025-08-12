function countVowels(str){

    let count = 0;

    if(str.length == 0)
        return count;

    for(let i=0;i<str.length;i++)
        if("aeiouAEIOU".includes(str[i]))
            count++;

    return count;
}

let str = "AEIofjgfjgetreru";
let result = countVowels(str);
console.log(result);