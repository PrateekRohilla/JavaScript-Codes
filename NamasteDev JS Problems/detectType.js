function detectType(data){

    if(typeof data === 'string')
        console.log('string')

    if(typeof data === 'number')
        console.log('number')

    if(typeof data === 'undefined')
        console.log('undefined')

    if(typeof data === 'object')
        console.log('object')

    //not working - boolean, null, fucntion, array(as obj not arr)
}

detectType('hello')
detectType(123)
//detectType(true)
detectType(undefined)
detectType({})
//detectType([])
// detectType(null)
//detectType(function() {})

