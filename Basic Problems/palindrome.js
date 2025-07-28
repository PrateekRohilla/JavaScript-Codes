//works for both number & string
function palindrome(data){

    if(typeof data == "number")
        data = data.toString();

    let first = 0;
    let last = data.length-1;

    while(first < last){
        if(data[first] !== data[last])
            return false;

        first++;
        last--
    }

    return true;
}

let res = palindrome('racecar');
console.log(res);