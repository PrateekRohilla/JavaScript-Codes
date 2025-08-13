function makeCounter(initialValue = 0){
    let count = initialValue;

    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count = initialValue;
            return count;
        },
        getValue: function(){
            return count;
        }
    };

}


const counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.getValue());

const counter2 = makeCounter(10);

console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
console.log(counter2.getValue());
