//reverse str
/* 
function revStr(str){

    let arr = str.split('');
    let s = 0, l = arr.length-1;
    while(s<=l){
        let t = arr[s]
        arr[s] = arr[l];
        arr[l] = t;
        s++,l--;
    }

    return arr.join('');
}

//reverse js way
function revJS(str){
    return str.split('').reverse().join('');
}

console.log(revJS('abcd'));
 */


//check palindrome
/* 
function palindrome(str){

    let s = 0, l = str.length-1;
    while(s<=l){
        if(str[s] !== str[l])
            return 'not palindrome';
        
        s++,l--;
    }
    return 'palindrome';
}

console.log(palindrome('abcbaa')); */


