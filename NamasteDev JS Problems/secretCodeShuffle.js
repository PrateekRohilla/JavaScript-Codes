//https://namastedev.com/practice/secret-code-shuffler

//TC - O(n) | SC - O(n)
function codeShuffle(str){

    if(!str || str.length === 0 || str.length % 2 !== 0)
        return '';

    let result = '';

    //process str in pairs
    for(let i=0;i<str.length;i+=2){
        let letter = str[i];
        let shift = parseInt(str[i+1]);

        if(letter >= 'a' && letter <= 'z'){

            //calculate new character code
            let newCharCode = letter.charCodeAt(0) + shift;
            result += String.fromCharCode(newCharCode);
        }
    }

    return result;
}

let str = 'a1b1z3';
console.log(codeShuffle(str));