//can take any no of arguments
function sum(...args) {

    return args.reduce((acc, cur) => acc + cur, 0)

}

console.log(sum(2, 3, 4, 5, 6));