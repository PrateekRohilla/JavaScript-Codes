//print all values in nested object
function objPrint(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null)
            objPrint(obj[key]);
        else
            console.log(`${key} , ${obj[key]}`);
    }

}

/*
typeof null is object
so also add condition check for null
*/







let obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 'Hi'
            }
        }
    }
}

let obj2 = {
    a: 1,
    b: [
        { c: 3 },
        {
            d: {
                e: 5,
                f: {
                    g: 'Hi',
                },
            }
        }
    ]
}






console.log(objPrint(obj2));