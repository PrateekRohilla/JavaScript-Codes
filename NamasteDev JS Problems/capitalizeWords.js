//capitalize first letter of word & remove extra spaces(leading, trailing & extra middle spaces)
/*
trim for leading & trailig spaces
regex - /\s+/ for removing extra middle spaces
split will create arr of words
need to do for every word - so used map
at last join arr of words to sentence
TC - O(n) | SC - O(n)
*/

function capitalize(str){

    return str
                .trim()
                .split(/\s+/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
}

let str = '  hello        world     ';
let result = capitalize(str);

console.log(result);

