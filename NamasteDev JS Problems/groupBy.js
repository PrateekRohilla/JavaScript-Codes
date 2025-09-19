function groupBy(arr, key) {

    let result = {};

    for (let item of arr) {

        let keyValue = item[key];

        if (!result.hasOwnProperty(keyValue))
            result[keyValue] = [];

        result[keyValue].push(item);
    }

    return result;
}


let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'ram', age: 18 },
    { name: 'shyam', age: 20 },
    { name: 'ghanshyam', age: 15 },
    { name: 'prateek', age: 26 }
];

let res = groupBy(users, 'age');
console.log(res);


//groupBy native js function for objects
//groupBy(arr, fn) | fn will run for every object in array
const groupByage = Object.groupBy(users, user => user.age);
console.log(groupByage);

//get users with only age 25
console.log(groupByage[25]);

//can also apply logic & get data
const maturedGuys = Object.groupBy(users, 
    user => user.age >= 18 ? "Mature" : "Immature"
);

console.log(maturedGuys);