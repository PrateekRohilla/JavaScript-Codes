//shuffle array elements

let arr = [1,2,3,4,5];
let result = [...arr];

function shuffle(arr){
    for(let i=result.length -1; i>0; i--){
        const random = Math.floor(Math.random() * (i+1));

        //swapping using destructuring
        [result[i], result[random]] = [result[random], result[i]];
    }
}

shuffle(arr)

console.log(result);
