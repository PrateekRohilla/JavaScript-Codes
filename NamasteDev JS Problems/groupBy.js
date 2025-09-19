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
    { name: 'Charlie', age: 25 }
];

let res = groupBy(users, 'age');
console.log(res);