let n;
let n1 = 0;
let n2 = 1;
let nextterm;
let sum = 1;
let fibonacci = [];
let i = -1;
function do_sum_fibonacci(n) {
    i++;
    if (i < n) {
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
        fibonacci.push(nextterm);
        sum += nextterm;
        do_sum_fibonacci(n);
    }
    return `Dãy số fibonacci ${fibonacci} với ${n} số có tổng là ${sum}`;
}
console.log(do_sum_fibonacci(10));
//# sourceMappingURL=main.js.map