function reverseNum(num){
    if(num < 10)
        return num;

    let reversed = 0;

    while(num){
        let t = num%10;
        reversed += t;
        num = Math.floor(num/10);

        if(num)
            reversed *= 10;
    }

    return reversed;
}

function reverseTwo(num){
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return Number(reversedStr);
}

let res = reverseTwo(54321);
console.log(res);

