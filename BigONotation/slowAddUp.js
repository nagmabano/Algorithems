// slow add up to
var sumSlow = '';
var timeFast;

function addUpTo(n) {
    let total = 0;
    for (let i = 1 ; i <= n ; i++) {
        total += i;
    }

    return total
}

let time1 = performance.now();
sumSlow = addUpTo(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1)/1000} seconds.`);
