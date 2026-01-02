//check substr in str

function checkSubstr(str, substr){

    let strLen = str.length;
    let substrLen = substr.length;

    for(let i=0;i<=strLen-substrLen;i++){
        let matched = true;

        for(let j=0;j<substrLen;j++){
            if(str[i+j] !== substr[j]){
                matched = false;
                break;
            }

        }

        if(matched)
            return true;
    }

    return false;
}





let str = 'hellothere';
let substr = 'there';

console.log(checkSubstr(str,substr));