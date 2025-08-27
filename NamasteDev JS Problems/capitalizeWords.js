//capitalize first letter of word & remove extra spaces

function trimExtended(str){
    let words = str.trim().split(/\s+/);
    return words.join(' ');
}

function capitalize(str){
    
    let lowerStr = str.toLowerCase();
    let firstLetter = str.charAt(0).toUpperCase();
    let remainingStr = lowerStr.slice(1);

    return firstLetter + remainingStr;
}

function capitalizeWord(str){
    
    let words = str.split('');
    //console.log(words);
    let capitals = words.map(word => capitalize(word));

    let result = capitals.join('');
}

let str = '  hello        world     ';
let result = trimExtended(str);

console.log(result);

