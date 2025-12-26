//rev number
/* let num = 1234;
let rev = 0;
while(num){
    rev *= 10;
    rev += num%10;
    num = Math.floor(num/10);
}
console.log(rev); */


//palindrome
/* let num = 12121;
let numCopy = num;
let rev = 0;
while(num){
    rev *= 10;
    rev += num%10;
    num = Math.floor(num/10);
}
if(numCopy == rev)
    console.log('palindrome');
else
    console.log('not palindrome');
 */


//sum of digits
let num = 12345;
let sum = 0;
while(num){
    sum += num%10;
    num = Math.floor(num/10);
}
console.log(sum);