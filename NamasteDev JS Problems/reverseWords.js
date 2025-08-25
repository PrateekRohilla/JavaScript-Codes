function reverseWords(str){

    //get arr of words (split by space)
    const words = str.split(' ');

    //for every word - split into chars arr -> reverse arr -> again join into word
    const reversedWords = words.map(word => word.split('').reverse().join(''));

    let result = reversedWords.join(" ");

    return result;
}



let str = "what about you";

let result = reverseWords(str);
console.log(result);