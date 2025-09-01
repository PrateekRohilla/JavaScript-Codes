//capitalize first letter of word & remove extra spaces(leading, trailing & extra middle spaces)
/*
trim for leading & trailig spaces
regex - /\s+/ for removing extra middle spaces
TC - O(n) | SC - O(n)
*/
function capitalize(str){

    let trimSpaces = str.trim();
    let extraSpaces = trimSpaces.split(/\s+/);
    let result = extraSpaces.join(' ')

    return result;

    //one liner
    //return trimSpaces = str.trim().split(/\s+/).join(' ');
}

let str = '  hello        world     ';
let result = capitalize(str);

console.log(result);

