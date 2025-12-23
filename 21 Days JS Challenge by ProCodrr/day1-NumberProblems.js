let n = 5;

//print 1 to n 
// for(let i=1;i<=n;i++)
//     console.log(i);

//print n to 1
// for(let i=5;i>0;i--)
//     console.log(i);;

//even nums 1 to n
// for(let i=1;i<=n;i++)
//     if(i%2 == 0)
//         console.log(i);

//sum of first n natural nums
// let sum = 0;
// for(let i=1;i<=n;i++)
//     sum+=i;
// console.log(sum);

//factorial of n
// let fact = 1;
// for(let i=1;i<=n;i++)
//     fact *=i;
// console.log(fact);

//print only nums that are both even & perfect nums
for(let i=1;i<=20;i++)
    if(i%2 == 0 && i*i<=20)
        console.log(i*i);