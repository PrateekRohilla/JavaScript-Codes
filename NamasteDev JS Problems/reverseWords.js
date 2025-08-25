//LC - 557 | Reverse Words in a String III

//TC - O(n) | SC - O(n)
/*
function reverseWords(str){

    //get arr of words (split by space)
    const words = str.split(' ');

    //for every word - split into chars arr -> reverse arr -> again join into word
    const reversedWords = words.map(word => word.split('').reverse().join(''));

    let result = reversedWords.join(" ");

    return result;
}
*/

//two pointer solution (& more language generic code)
function reverseWords(str) {
    
    let chars = str.split('');
    let start = 0;

    for (let i = 0; i <= chars.length; i++) {

        // when space or end of string is found -> reverse this word
        if (i === chars.length || chars[i] === ' ') {
            let left = start, right = i - 1;

            // two pointer reversal
            while (left < right) {
                [chars[left], chars[right]] = [chars[right], chars[left]];
                left++;
                right--;
            }

            // move start to next word
            start = i + 1; 
        }
    }

    return chars.join('');
}


let str = "what about you";

let result = reverseWords(str);
console.log(result);