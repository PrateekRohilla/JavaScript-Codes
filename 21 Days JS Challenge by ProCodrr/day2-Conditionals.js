
//max of three nums
// let a = 4, b = 11, c = 1;
// let res = a>b ? (a>c? a:c) : (b>c?b:c);
// console.log(res);

//vowel or consonant
// let char = 'k';
// if(char = 'a' || 'e' || 'i' || 'o' || 'u')
//     console.log('vowel');
// else
//     console.log('consonant');


//leap year
// let year = 2000;
// if((year%4 == 0 && year%100 != 100) || year%400 == 0)
//     console.log('leap')
// else
//     console.log('not leap')

//check upper,lowercase, digit or special char
let str = 'Abc';
// let char = str.charCodeAt(0)    //charCodeAt returns number(unicode/ascii value)
// if(char >= 65 && char <= 90)
//     console.log('uppercase');
// else if(char >= 97 && char <= 122)
//     console.log('lowercase');
// else if(char >= 48 && char <= 57)
//     console.log('digit');
// else
//     console.log('special character');

let char = str[0];
if(char >= 'A' && char <='Z')
    console.log('uppercase');
else if(char >= 'a' && char <= 'z')
    console.log('lowercase');
else if(char >= '0' && char <= '9')
    console.log('digit');
else
    console.log('special character');