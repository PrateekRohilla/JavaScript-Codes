let count = 1;

let interval = setInterval(() => {
    console.log("Tick:", count);
    count++;
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped after 10 seconds");
}, 10000);
