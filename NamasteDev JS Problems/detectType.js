/*
- typeof works for number, string, boolean, undefined, object, function
- for arrays also typeof returns object, to uniquely identify use Array.isArray() fn
- for null check using strict type checking ===
*/
function detectType(data){

    if(data === null)
        return 'null';

    if(Array.isArray(data))
        return 'array';

    return typeof data;
}

console.log(detectType('hello'));
console.log(detectType(123));
console.log(detectType(true));
console.log(detectType(undefined));
console.log(detectType({}));
console.log(detectType([1,2,3]));
console.log(detectType(null));
console.log(detectType(function() {}));