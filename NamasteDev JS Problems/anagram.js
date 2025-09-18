//JS way
function isAnagram(str1, str2){

    if(str1.length != str2.length)
        return false;

    const rearrange = str => str.split('').sort().join('');
    
    return rearrange(str1) === rearrange(str2);
}

//TC - nlogn | sort & compare
function anagram1(str1, str2){

    if(str1.length != str2.length)
        return false;

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    for(let i=0;i<str1.length;i++)
        if(sortedStr1[i] != sortedStr2[i])
            return false;
    
    return true;
}

//TC - O(n) | count freq of chars in strings & check
function anagram2(str1, str2){
    if(str1.length != str2.length)
        return false;

    let freq = new Array(26).fill(0);

    for(let i=0;i<str1.length;i++){
        
        let index1 = str1[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index1]++;

        let index2 = str2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index2]--;
    }

    for(let i=0;i<26;i++)
        if(freq[i] != 0)
            return false;

    return true;
}



let str1 = 'silent';
let str2 = 'listen';

console.log(isAnagram(str1, str2));