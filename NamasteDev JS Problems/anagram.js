//JS way
function isAnagram(){

    if(str1.length != str2.length)
        return false;

    const rearrange = str => str.split('').sort().join('');
    
    return rearrange(str1) === rearrange(str2);
}


let str1 = 'silent';
let str2 = 'listen';

console.log(isAnagram(str1, str2));